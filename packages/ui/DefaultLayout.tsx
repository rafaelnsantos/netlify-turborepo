/* eslint-disable react/display-name */
import { ReactElement } from "react"
import { Header, NavLink, Sidebar } from "ui/Header"
import { SocialProps } from "./Footer"
import { Footer } from "./Footer/Footer"

interface DefaultLayoutProps {
  logo?: string
  navigation: NavLink[]
  socials?: SocialProps[]
}

export const DefaultLayout =
  ({
    navigation,
    logo = "https://explorer.preview.kindelia.org/kindelia_icon.svg",
    socials = [],
  }: DefaultLayoutProps) =>
  (page: ReactElement) => {
    return (
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          <Header logo={logo} links={navigation} />
          <div className="p-2 flex-grow">
            <main className="mx-auto max-w-3xl">{page}</main>
          </div>
          <Footer socials={socials} />
        </div>
        <Sidebar links={navigation} />
      </div>
    )
  }
