import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";
import { z } from 'zod';

export const tasksRouter = createTRPCRouter({
  getTasks: publicProcedure
    .query(({ ctx }) => {
      const tasks = ctx.db.whatToDo.findMany();
    return tasks;
    }),
  createTask: publicProcedure
    .input(z.object({ task: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return ctx.db.whatToDo.create({
        data:{
          task: input.task,
          userId: 'clnj0js460000i5vsv08tm92o',
          complete: false
        }
      });
    }),
  completeTask: publicProcedure
    .input(z.object({ taskId: z.number(), completed: z.boolean() }))
    .mutation(async ({ input, ctx }) => {
      return ctx.db.whatToDo.update({
        where: { id: input.taskId },
        data: { complete: input.completed },
      });
    }),
  deleteTask: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      console.log(input)
      const id = parseInt(input.id)
      return ctx.db.whatToDo.delete({
        where: { id: id },
      });
    }),
})