import type { NextApiRequest, NextApiResponse } from "next";
import backFetch from "./_helpers/backFetch";

const api = "https://api.airtable.com/v0";
const base = "apprWMFAjxSZ0yeyJ";
const table = "tblwHjCEVb5xzfb0q";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body: { name, email, message, website },
  } = req;

  const popularEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "live.com",
    "icloud.com",
    "aol.com",
  ];
  const emailDomain = email?.split("@")[1];

  if (!email || !name || !message)
    return res.status(400).json({ message: "Invalid input" });

  if (!popularEmailDomains.includes(emailDomain))
    return res.status(400).json({
      message:
        "Please use a popular email domain like gmail.com, yahoo.com, etc.",
    });

  req.body = {
    records: [
      {
        fields: {
          name: website ? "[Bot Probably] " + name : name,
          email,
          message,
          status: website ? "Spam" : "Todo",
        },
      },
    ],
  };

  const url = `${api}/${base}/${table}`;
  await backFetch(url, req, res);
}
