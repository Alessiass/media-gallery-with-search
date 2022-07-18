import { z } from "zod";

export const searchSchema = z.string().min(3, {
  message: "You need to type at least 3 letters to start searching",
});

export type searchSchemaType = z.infer<typeof searchSchema>; //additional type in case of changing to object
