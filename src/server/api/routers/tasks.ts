import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { z } from 'zod';

export const tasksRouter = createTRPCRouter({
  getTasks: publicProcedure
    .query(({ ctx }) => {
      const tasks = ctx.db.whatToDo.findMany();
    return tasks;
    }),
  createTask: protectedProcedure
    .input(z.object({ task: z.string() }))
    .query(({ input }) => {
      return {
        task: input.task,
      };
    }),
  completeTask: protectedProcedure
    .input(z.object({ taskId: z.number(), completed: z.boolean() }))
    .mutation(({ input, ctx }) => {
      return ctx.db.whatToDo.update({
        where: { id: input.taskId },
        data: { complete: input.completed },
      });
    }),
  deleteTask: protectedProcedure
    .input(z.object({ taskId: z.number() }))
    .mutation(({input, ctx}) => {
      return ctx.db.whatToDo.delete({
        where: { id: input.taskId },
      });
    }),
})