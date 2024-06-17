import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content atleast of  10 characters" })
    .max(300, { message: "Content must be within 300 characters" }),
});
