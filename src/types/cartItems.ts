import { z } from "zod";

const cartItemsSchema = z
  .object({
    id: z.number().optional(),
    quantity: z.number().optional(),
    price: z.string().optional(),
    subscription: z.boolean().optional(),
    sub_total: z.string().optional(),
  })
  .nullable();

export type CartItems = z.infer<typeof cartItemsSchema>;
export { cartItemsSchema };
