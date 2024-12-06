import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.string(),
  image_url: z.string().optional(),
  display_price: z.string(),
});

const cartItemsSchema = z.object({
  id: z.number(),
  quantity: z.number(),
  price: z.string(),
  subscription: z.boolean(),
  product: productSchema,
});

const cartSchema = z
  .object({
    id: z.number(),
    token: z.string().optional(),
    visitor_id: z.number().optional(),
    type: z.string(),
    currency_code: z.string(),
    currency_symbol: z.string(),
    display_price: z.string(),
    sub_total: z.string(),
    cart_items: z.array(cartItemsSchema).nullable().optional(),
  })
  .nullable();

export type CartItems = z.infer<typeof cartItemsSchema>;
export type Carts = z.infer<typeof cartSchema>;
export { cartSchema };
