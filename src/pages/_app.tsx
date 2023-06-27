import React from "react";
import Head from 'next/head'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond } from "@next/font/google";
import { AnimatePresence } from "framer-motion";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["cyrillic"],
  weight: "300",
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
    <Head>
      <meta name="google-site-verification" content="G-3MhyXayiPClo-PvC5XOHYF5jvgpC1YVXWMv7darRQ" />
    </Head>
    <AnimatePresence mode="wait" initial={false}>
      <main className={cormorantGaramond.className}>
        <Component {...pageProps} key={router.asPath} />
      </main>
    </AnimatePresence>
    </>
    
  );
}
