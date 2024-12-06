import { z } from "zod";

const cartItemsSchema = z
  .object({
    id: z.number(),
    quantity: z.number(),
    price: z.string(),
    subscription: z.boolean(),
    sub_total: z.string(),
  })
  .nullable();

export type CartItems = z.infer<typeof cartItemsSchema>;
export { cartItemsSchema };
