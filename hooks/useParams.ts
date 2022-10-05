import { useRouter } from "next/router";

export default function useParams(param: string): string | undefined {
  const router = useRouter();
  if (router.query[param] && typeof router.query[param] === "string")
    return router.query[param]?.toString();
  return undefined;
}
