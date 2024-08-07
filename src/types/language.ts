import { z } from "zod";

const languageSchema = z.object({
  id: z.number(),
  name: z.string(),
  iso: z.string(),
  active: z.boolean(),
});

export type Language = z.infer<typeof languageSchema>;

export { languageSchema };
