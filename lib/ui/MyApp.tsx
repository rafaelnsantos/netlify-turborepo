/* eslint-disable react/display-name */
import { DefaultSeo, NextSeoProps } from "next-seo"
import { ThemeProvider } from "next-themes"
import { AppPropsWithLayout } from "./Layout"
import Router from "next/router"
import nProgress from "nprogress"

import "./tailwind.css"
import "./nprogress.css"

Router.events.on("routeChangeStart", nProgress.start)
Router.events.on("routeChangeError", nProgress.done)
Router.events.on("routeChangeComplete", nProgress.done)

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
