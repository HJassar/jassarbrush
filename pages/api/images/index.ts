import type { NextApiRequest, NextApiResponse } from "next";
import backFetch from "../_helpers/backFetch";

const api = "https://api.airtable.com/v0";
const base = "apprWMFAjxSZ0yeyJ";
const table = "tbl8Zv9SFZCr58633";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { category_slug, featured } = req.query;

  //  The iffy part is the filterByFormula.
  const comma = "%2C";
  const filters = [];
  if (category_slug)
    filters.push(encodeURIComponent(`category_slug="${category_slug}"`));
  if (featured) filters.push(encodeURIComponent(`featured`));
  let filter = `filterByFormula=AND(${filters.join(comma)})`;
  // Sorting is also a bit iffy.
  const sortField =
    encodeURIComponent("sort[0][field]") + `=${encodeURIComponent("order")}`;
  const sortDirection = encodeURIComponent("sort[0][direction]") + `=asc`;
  // One big url!
  const url = `${api}/${base}/${table}?${filter}&${sortField}&${sortDirection}`;

  await backFetch(url, req, res);
}
