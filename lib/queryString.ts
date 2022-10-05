export default function queryString(obj: any) {
  if (obj) {
    const esc = encodeURIComponent;
    return Object.keys(obj)
      .filter((k) => k !== "id")
      .map((k: string) => esc(k) + "=" + esc(obj[k]?.toString() || ""))
      .join("&");
  }
  return "";
}
