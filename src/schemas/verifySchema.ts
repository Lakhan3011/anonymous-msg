import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().length(6, { message: "Verification Code must ne 6 digits" }),
});
