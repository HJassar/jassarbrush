import type { NextApiRequest, NextApiResponse } from "next";
import backFetch from "../_helpers/backFetch";

type Data = {
  name: string;
};

const api = "https://api.airtable.com/v0";
const base = "apprWMFAjxSZ0yeyJ";
const table = "tbl8Zv9SFZCr58633";
const api_key = process.env.AT_API_KEY;

// encodeURIComponent
// https://api.airtable.com/v0/apprWMFAjxSZ0yeyJ/tbl8Zv9SFZCr58633?filterByFormula=category_slug%3D%22water-worlds%22&api_key=keyTAPZAvtvmJplEj

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { category_slug } = req.query;
  const filter =
    "filterByFormula=" + encodeURIComponent(`category_slug="${category_slug}"`);
  const sortField =
    encodeURIComponent("sort[0][field]") + `=${encodeURIComponent("order")}`;
  const sortDirection = encodeURIComponent("sort[0][direction]") + `=asc`;
  const url = `${api}/${base}/${table}?${filter}&${sortField}&${sortDirection}&api_key=${api_key}`;
  await backFetch(url, req, res);
}
