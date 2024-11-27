import { z } from "zod";
import { productSchema } from "./product";

const collectionSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  image_path: z.boolean().nullable(),
  image_url: z.string().optional().nullable(),
  position: z.number().nullable(),
  public: z.boolean().nullable(),
  products: z.array(productSchema).optional(),
});

export type Collection = z.infer<typeof collectionSchema>;
export { collectionSchema };
