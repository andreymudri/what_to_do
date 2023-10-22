### What to do

This is a ToDo task application i created for my significant other.

This is a simple Next.js project with a NextAuth.js authentication system, Prisma, Tailwind CSS and tRPC.

### What is NextAuth.js

NextAuth.js is a complete open source authentication solution for Next.js applications, including support for OAuth, email and password, and more.

- [Next.js](https://nextjs.org)

### What is Prisma

Prisma is an open-source GraphQL ORM with a focus on developer experience, performance, and correctness.

- [Prisma](https://prisma.io)

### What is Tailwind CSS

Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.

- [Tailwind CSS](https://tailwindcss.com)

### What is tRPC

tRPC is a simple, modern GraphQL client for JavaScript.

- [tRPC](https://trpc.io)

### Built with

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

### How to run

- Clone the repo
- Install dependencies using `npm install` or `yarn`
- Create a `.env` file in the root directory and add the following:

```bash
DATABASE_URL="YOUR DATABASE URL"
NODE_ENV="production"
NEXTAUTH_SECRET="RANDOM SEQUENCE OF LETTERS AND NUMBERS"
NEXTAUTH_URL="YOUR APP URL" <- not needed on Vercel
DISCORD_CLIENT_ID="OAuth Related ID and Secrets"
DISCORD_CLIENT_SECRET="OAuth Related ID and Secrets"
GOOGLE_CLIENT_ID="OAuth Related ID and Secrets"
GOOGLE_CLIENT_SECRET="OAuth Related ID and Secrets"
GITHUB_CLIENT_ID="OAuth Related ID and Secrets"
GITHUB_CLIENT_SECRET="OAuth Related ID and Secrets"
```

- Run the project using `npm run dev` or `yarn dev`
