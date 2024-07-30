import { z } from "zod";

const variantCountrySchema = z.object({
  id: z.number(),
  price: z.string().nullable(),
  active: z.boolean(),
  shipping: z.string(),
  shipping_time: z.string().nullable(),
  currency_code: z.string(),
  subscription_price: z.string(),
  wholesale: z.string(),
  wholesale_subscription_price: z.string(),
  cost_of_goods_sold: z.string(),
  compare_price: z.string(),
});

export type VariantCountry = z.infer<typeof variantCountrySchema>;
export { variantCountrySchema };
