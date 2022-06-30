import type { AppProps } from "next/app";
import "./tailwind.css";

export function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
