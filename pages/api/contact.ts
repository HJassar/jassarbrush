import type { NextApiRequest, NextApiResponse } from "next";
import backFetch from "./_helpers/backFetch";

const api = "https://api.airtable.com/v0";
const base = "apprWMFAjxSZ0yeyJ";
const table = "tblwHjCEVb5xzfb0q";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    body: { name, email, message },
  } = req;
  if (!email || !name || !message)
    return res.status(400).json({ message: "Invalid input" });

  req.body = {
    records: [
      {
        fields: {
          name,
          email,
          message,
          status: "Todo",
        },
      },
    ],
  };

  console.log(req.body.records[0].fields);

  const url = `${api}/${base}/${table}`;
  await backFetch(url, req, res);
}
