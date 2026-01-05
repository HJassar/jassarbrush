import type { NextApiRequest, NextApiResponse } from "next";
import backFetch from "./_helpers/backFetch";

const api = "https://api.airtable.com/v0";
const base = "apprWMFAjxSZ0yeyJ";
const table = "About";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Sorting by the "Order" field
  const sortField =
    encodeURIComponent("sort[0][field]") + `=${encodeURIComponent("Order")}`;
  const sortDirection = encodeURIComponent("sort[0][direction]") + `=asc`;
  // One big url!
  const url = `${api}/${base}/${table}?${sortField}&${sortDirection}`;

  await backFetch(url, req, res);

}
