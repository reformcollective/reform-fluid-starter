import { nullable, z } from "zod";

const addressSchema = z.object({
  id: z.number(),
  name: z.string(),
  address1: z.string(),
  address2: z.string().nullable(),
  address3: z.string().nullable(),
  city: z.string(),
  state: z.string(),
  subdivision_code: z.string().nullable(),
  postal_code: z.string(),
  country_code: z.string(),
});

const shippingOptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  delivery_time: z.string(),
  price: z.number(),
  price_label: z.string(),
});

const paymentMethodSchema = z.object({
  id: z.string(),
  name: z.string(),
  icons: z.array(z.string()),
  description: z.string().nullable(),
});

const cartItemsSchema = z.object({
  id: z.number().nullable(),
  variant_id: z.number().nullable(),
  quantity: z.number(),
  price: z.string().nullable(),
});

const cartSchema = z
  .object({
    id: z.number().nullable(),
    attributable_id: z.number().nullable(),
    attributable_type: z.string().nullable(),
    ship_to: z
      .object({
        address: addressSchema,
      })
      .nullable(),
    bill_to: z
      .object({
        address: addressSchema,
      })
      .nullable(),
    discount_code: z.string().nullable(),
    available_shipping_options: z
      .array(shippingOptionSchema)
      .nullable()
      .optional(),
    available_payment_methods: z
      .array(paymentMethodSchema)
      .nullable()
      .optional(),
    cart_items: z.array(cartItemsSchema).nullable(),
    payment_method: paymentMethodSchema.nullable(),
  })
  .nullable();

export type Carts = z.infer<typeof cartSchema>;
export { cartSchema };
