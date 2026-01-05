export default function getLocalToken() {
  let token = "";
  // Only access localStorage on the client side to avoid hydration issues
  if (typeof window !== "undefined" && window.localStorage) {
    if (localStorage.getItem("accessToken")) {
      const { token: localToken, expires }: { token: string; expires: any } =
        JSON.parse(localStorage.getItem("accessToken") || "{}") || {};
      // If the token is expired, remove it from localStorage, otherwise, use it.
      if (Date.now() - new Date(expires).getTime() > 0) {
        localStorage.removeItem("accessToken");
        // also, clear the token itself
        token = "";
      } else token = localToken;
    }
  }
  return { token };
}
