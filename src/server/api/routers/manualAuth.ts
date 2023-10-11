import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";
import * as argon2 from 'argon2';

export const manualAuthRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const getuser = await ctx.db.user.findUnique({
        where: {
          email: input.email
        }
      })
      if (!getuser?.password) {
        throw new Error('Invalid username or password')
      }
      const verifyPW = await verifyPassword(getuser.password, input.password)
      if (!verifyPW) {
        throw new Error('Invalid username or password')
      }
      //TODO implement login auth
      return getuser
    }),
  register: publicProcedure
    .input(z.object({ username: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const hashpw = await hashPassword(input.password);
      return ctx.db.user.create({
        data: {
          email: input.username,
          password: hashpw,
        },
      });
    }),
  logout: publicProcedure.mutation(() => {
    //TODO implement logout
  })
})

async function hashPassword(password: string): Promise<string> {
  try {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw new Error('Error hashing password');
  }
}

async function verifyPassword(hashedPassword: string, password: string): Promise<boolean> {
  try {
    const isPasswordValid = await argon2.verify(hashedPassword, password);
    return isPasswordValid;
  } catch (error) {
    return false;
  }
}