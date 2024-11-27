import { z } from "zod";

const imageSchema = z.object({
  id: z.number(),
  image_url: z.string(),
  image_path: z.string().nullable(),
  position: z.number(),
});

export type Image = z.infer<typeof imageSchema>;
export { imageSchema };
