import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "@/env.mjs";
import { db } from "@/server/db";
import { type User } from '@prisma/client';
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      // ...other properties
      // role: UserRole;
    };
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}
/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({

      name: 'Credentials',

      credentials: {
        email: { label: "email", type: "text"},
        password: { label: "password", type: "password" }
      },
     async authorize(credentials: { email: string; password: string; } | undefined, _req) {
        if (!credentials) {
          return null
        }
        const res = await fetch("/api/trpc/manualAuthRouter.login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });
        const user = await res.json() as User;

        if (!res.ok) {
          console.error('Failed to fetch:', res.status, res.statusText);
          // Handle the error as needed
        }
        // If no error and we have user data, return it
        if (res.ok && user) {
          return Promise.resolve(user);
        }

        // Return null if user data could not be retrieved
        return Promise.resolve(null);
      }
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

