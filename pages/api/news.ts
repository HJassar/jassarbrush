import type { NextApiRequest, NextApiResponse } from "next";
import backFetch from "./_helpers/backFetch";

const api = "https://api.airtable.com/v0";
const base = "apprWMFAjxSZ0yeyJ";
const table = "tbl7sNhRgnsIHUGoK";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  //  The iffy part is the filterByFormula.
  const comma = "%2C";
  const filters: string[] = [];
  let filter = `filterByFormula=AND(${filters.join(comma)})`;
  // Sorting is also a bit iffy.
  const sortField =
    encodeURIComponent("sort[0][field]") + `=${encodeURIComponent("Date")}`;
  const sortDirection = encodeURIComponent("sort[0][direction]") + `=desc`;
  // One big url!
  const url = `${api}/${base}/${table}?${filter}&${sortField}&${sortDirection}`;

  await backFetch(url, req, res);
}
