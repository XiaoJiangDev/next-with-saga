"use client";
import type { AppProps } from "next/app";
import { wrapper } from "../models/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);