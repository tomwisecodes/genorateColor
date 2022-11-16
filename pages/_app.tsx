import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { TypeScaleContextProvider } from "../context/typeScaleContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TypeScaleContextProvider>
        <Script src="../assets/scripts.colors." />
        <Component {...pageProps} />
      </TypeScaleContextProvider>
    </>
  );
}
