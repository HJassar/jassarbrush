import useSWR, { KeyedMutator } from "swr";

import queryString from "../lib/queryString";

import getLocalToken from "../lib/getLocalToken";
import useToken from "./useToken";

import { IError } from "../interfaces/error.interface";

export default function useData(
  dataType: "images" | "news" | "exhibitions",
  id: string | undefined,
  queryOptions: object = {},
  isPrivate: boolean = true,
): {
  data: any;
  error: IError | undefined;
  loading: boolean;
  mutate: KeyedMutator<any>;
} {
  const idUrl = id !== "all" ? `/${id}` : "";
  const queries = queryOptions ? queryString(queryOptions) : "";
  const url = `/api/${dataType}/${idUrl}?${queries}`;

  // This prevents multiple unauthenticated attempts if the user is not signed in in the first place
  // For public data, you need to pass isPrivate: false or the data will not be fetched
  const { token } = useToken();
  const unauthBlocker = isPrivate && !token;

  const { data, mutate, error } = useSWR(
    id && !unauthBlocker ? url : null,
    fetcher,
  );
  const loading = !data && !error;
  return { error, loading, data, mutate };
}

async function fetcher(url: string) {
  const { token } = getLocalToken();
  const res = await fetch(url, {
    headers: { Authorization: Boolean(token) ? `Bearer ${token}` : "" },
  });
  const { data, message } = await res.json();
  if (!res.ok) {
    const error: IError = {
      message: message || "An error occurred while fetching the data.",
      code: res.status || 500,
    };
    throw error;
  }
  return data;
}
