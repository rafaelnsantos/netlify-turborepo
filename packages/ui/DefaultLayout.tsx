/* eslint-disable react/display-name */
import { ReactElement } from "react"
import { Header, NavLink, Sidebar } from "ui/Header"

interface DefaultLayoutProps {
  logo?: string
  navigation: NavLink[]
}

export const DefaultLayout =
  ({
    navigation,
    logo = "https://explorer.preview.kindelia.org/kindelia_icon.svg",
  }: DefaultLayoutProps) =>
  (page: ReactElement) => {
    return (
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <Header logo={logo} links={navigation} />
          <div className="px-2">
            <main className="mx-auto max-w-3xl">{page}</main>
          </div>
        </div>
        <Sidebar links={navigation} />
      </div>
    )
  }
