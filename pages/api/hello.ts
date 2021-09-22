// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { transform } from "./utils";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;
  try {
    const output = transform(body);
    res.status(200).json({
      name: output,
    });
  } catch (e) {
    res.status(400).json({
      name: e,
    });
  }
}
