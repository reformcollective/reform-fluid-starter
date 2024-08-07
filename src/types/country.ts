import { z } from "zod";

const countrySchema = z.object({
  id: z.number(),
  name: z.string(),
  iso: z.string(),
  active: z.boolean(),
  iso_name: z.string(),
  iso3: z.string().length(3),
  numcode: z.number(),
  currency_code: z.string(),
  currency_symbol: z.string(),
  separator: z.string(),
  delimiter: z.string(),
  address3: z.boolean(),
  state: z.boolean(),
  passport: z.boolean(),
  itn: z.boolean(),
  tax_rate: z.number(),
});

export type Country = z.infer<typeof countrySchema>;

export { countrySchema };
