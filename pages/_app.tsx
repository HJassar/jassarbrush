import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { LBProvider } from "../LBContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LBProvider>
      <Component {...pageProps} />
      <Analytics />
    </LBProvider>
  );
}

export default MyApp;
