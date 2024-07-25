import client from "@/api/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const resp = await client(`/collections/`);
    res.status(200).json(resp);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
