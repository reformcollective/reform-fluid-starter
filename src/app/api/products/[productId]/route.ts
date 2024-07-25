import client from "@/api/client";
import type { NextApiRequest, NextApiResponse } from "next";

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const urlParams = req.url?.split("/");
  const productId = urlParams?.[urlParams.length - 1];
  if (productId) {
    try {
      const fluidResponse = await client(`products/${productId}`);
      console.log({ fluidResponse });
      return res.status(fluidResponse.status).json(fluidResponse);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(400).json({ message: "Bad Request" });
  }
}

export { GET };
