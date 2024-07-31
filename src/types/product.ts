import { variantSchema } from "@/types/variant";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  active: z.boolean(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  introduction: z.string().nullable(),
  feature_text: z.string().nullable(),
  stripped: z.string(),
  price: z.string(),
  display_price: z.string(),
  shipping: z.string().nullable().optional(),
  subscription_price: z.string().nullable(),
  display_wholesale_price: z.string().nullable().optional(),
  display_wholesale_subscription_price: z.string().nullable().optional(),
  wholesale_price: z.string().nullable().optional(),
  wholesale_subscription_price: z.string().nullable().optional(),
  currency_code: z.string().nullable(),
  public: z.boolean().nullable(),
  in_stock: z.boolean().nullable(),
  unlimited_inventory: z.boolean().nullable().optional(),
  keep_selling: z.boolean().nullable(),
  image_url: z.string().optional(),
  images: z.array(
    z.object({
      id: z.number(),
      image_url: z.string(),
      image_path: z.string(),
      position: z.number(),
    })
  ),
  variants: z.array(variantSchema),
});

export type Product = z.infer<typeof productSchema>;
export { productSchema };
