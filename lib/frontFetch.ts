import { IError } from "../interfaces/error.interface";
import { toast } from "react-hot-toast";
import toastDuration from "./toastDuration";
import getLocalToken from "./getLocalToken";

export default async function frontFetch(
  url: string,
  method: "POST" | "PUT" | "DELETE" | "PATCH" | "GET" = "GET",
  body?: any,
) {
  const { token } = getLocalToken();
  // Set the request init
  const init: { method: string; headers: any; body?: any } = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": Boolean(token) ? `Bearer ${token}` : "",
    },
  };
  if (body) init.body = JSON.stringify(body);
  // Fetch
  const res = await fetch(url, init);
  const { data, message } = await res.json();
  // Process the response
  if (!res.ok) {
    const error: IError = {
      message: message || "An error occurred while fetching the data.",
      code: res.status || 500,
      data: data || null,
    };
    toast.error(error.message, {
      duration: toastDuration(error.message, 4000),
    });
    return { error };
  }

  if (message) {
    toast.success(message, {
      duration: toastDuration(message, 2000),
    });
  }
  return { data };
}
