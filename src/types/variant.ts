import { variantCountrySchema } from "@/types/variantCountry";
import { z } from "zod";
import { imageSchema } from "./image";

const variantSchema = z.object({
  id: z.number(),
  title: z.string().nullable(),
  is_master: z.boolean().nullable(),
  image_urL: z.string().nullable().optional(),
  buyable: z.boolean().nullable(),
  allow_subscription: z.boolean(),
  subscription_only: z.boolean().nullable(),
  shipping_included_in_price: z.boolean().nullable(),
  variant_countries: z.record(variantCountrySchema),
  images: z.array(imageSchema).nullable(),
});

export type Variant = z.infer<typeof variantSchema>;
export { variantSchema };
