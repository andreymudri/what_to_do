import { exampleRouter } from "@/server/api/routers/example";
import { createTRPCRouter } from "@/server/api/trpc";
import { tasksRouter } from './routers/tasks';
import { manualAuthRouter } from './routers/manualAuth';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  tasks: tasksRouter,
  auth: manualAuthRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
