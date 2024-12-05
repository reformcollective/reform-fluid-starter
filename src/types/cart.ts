import { z } from "zod";

const addressSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  address1: z.string().optional(),
  address2: z.string().nullable().optional(),
  address3: z.string().nullable().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  subdivision_code: z.string().nullable().optional(),
  postal_code: z.string().optional(),
  country_code: z.string().optional(),
});

const shippingOptionSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  delivery_time: z.string().optional(),
  price: z.number().optional(),
  price_label: z.string().optional(),
});

const paymentMethodSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  icons: z.array(z.string()).optional(),
  description: z.string().nullable().optional(),
});

const cartItemsSchema = z.object({
  id: z.number().nullable().optional(),
  variant_id: z.number().nullable().optional(),
  quantity: z.number().optional(),
  price: z.string().nullable().optional(),
  product_title: z.string().nullable().optional(),
});

const cartSchema = z
  .object({
    id: z.number().nullable().optional(),
    ship_to: z
      .object({
        address: addressSchema,
      })
      .nullable()
      .optional(),
    bill_to: z
      .object({
        address: addressSchema,
      })
      .nullable()
      .optional(),
    available_shipping_options: z
      .array(shippingOptionSchema)
      .nullable()
      .optional(),
    available_payment_methods: z
      .array(paymentMethodSchema)
      .nullable()
      .optional(),
    cart_items: z.array(cartItemsSchema).nullable().optional(),
    payment_method: paymentMethodSchema.nullable().optional(),
  })
  .nullable();

export type Carts = z.infer<typeof cartSchema>;
export { cartSchema };
