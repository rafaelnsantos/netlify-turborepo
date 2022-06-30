import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import "./tailwind.css"

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
