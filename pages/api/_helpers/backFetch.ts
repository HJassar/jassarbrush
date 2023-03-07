import { NextApiRequest, NextApiResponse } from "next";
const token = process.env.AT_TOKEN;

async function asyncTryCatch(fn: any, res: NextApiResponse) {
  try {
    const response = await fn();
    const data = await response.json();
    res.status(response.status).json({ data: data.records });
  } catch (error: any) {
    if (error.code === "ECONNREFUSED")
      error.message = "The server is offline! Please try again later.";
    res.status(500).json(error);
  }
}

export default async function backFetch(
  url: string,
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method = "GET", query, body = {} } = req;
  const fullUrl = `${url}`; //?${queryString(query)}`;
  const init: { method: string; headers: any; body?: any } = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
    },
  };
  if (method !== "GET") init.body = JSON.stringify(body);
  await asyncTryCatch(() => fetch(fullUrl, init), res);
}
