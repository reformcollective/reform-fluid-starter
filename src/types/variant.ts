import { variantCountrySchema } from "@/types/variantCountry";
import { z } from "zod";

const variantSchema = z.object({
  id: z.number(),
  title: z.string(),
  is_master: z.boolean(),
  image_urL: z.string().nullable().optional(),
  buyable: z.boolean(),
  allow_subscription: z.boolean(),
  subscription_only: z.boolean(),
  shipping_included_in_price: z.boolean(),
  variant_countries: z.record(variantCountrySchema),
  images: z.array(z.string()),
});

export type Variant = z.infer<typeof variantSchema>;
export { variantSchema };
