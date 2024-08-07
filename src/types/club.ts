import { z } from "zod";

const clubSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  min_points: z.number(),
  max_points: z.number().nullable(),
  member: z.boolean(),
});

export type Club = z.infer<typeof clubSchema>;
export { clubSchema };
