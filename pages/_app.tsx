import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LBProvider } from "../LBContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LBProvider>
      <Component {...pageProps} />
    </LBProvider>
  );
}

export default MyApp;
