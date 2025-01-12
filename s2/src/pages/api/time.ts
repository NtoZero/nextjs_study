import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nowDate = new Date();
  res.json({ time: nowDate.toLocaleString() });
}
