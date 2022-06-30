/* eslint-disable react/display-name */
import { DefaultSeo, NextSeoProps } from "next-seo"
import { ThemeProvider } from "next-themes"
import { AppPropsWithLayout } from "./Layout"
import "./tailwind.css"

export const MyApp =
  (seo: NextSeoProps) =>
  ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
      <ThemeProvider attribute="data-theme" disableTransitionOnChange>
        <DefaultSeo {...seo} />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    )
  }
