import { ThemeProvider } from "next-themes"
import { AppPropsWithLayout } from "./Layout"
import "./tailwind.css"

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider attribute="data-theme">
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
