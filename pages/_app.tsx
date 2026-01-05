import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

import { LBProvider } from "../LBContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add hydrated class after mount to re-enable transitions
    document.body.classList.add('hydrated');
  }, []);

  return (
    <LBProvider>
      <Component {...pageProps} />
      <Analytics />
    </LBProvider>
  );
}

export default MyApp;
