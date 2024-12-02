import { z } from "zod";
import getCollection from "./getCollection";
import getCollections from "./getCollections";
import getProduct from "./getProduct";
import getProducts from "./getProducts";

const safeZodParse = (
  data: unknown,
  schema: z.ZodSchema
): z.infer<typeof schema> => {
  let parsedData;
  try {
    parsedData = schema.parse(data);
    return parsedData;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      throw error;
    }
    console.error("Error parsing with ZOD:", error);
    return parsedData;
  }
};

export { getCollection, getCollections, getProduct, getProducts, safeZodParse };
