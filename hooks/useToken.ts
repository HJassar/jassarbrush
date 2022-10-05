import { useEffect, useState } from "react";
import getLocalToken from "../lib/getLocalToken";

// The useToken hook solves the problem of "localStorage" being unavailable in a server environment, e.g. in useData.ts.
export default function useToken() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const { token: localToken } = getLocalToken();
    setToken(localToken);
  }, []);

  return { token };
}
