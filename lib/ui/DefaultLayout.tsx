/* eslint-disable react/display-name */
import { ReactElement, ReactNode } from "react"
import { Header, NavLink, Sidebar } from "ui/Header"
import { SocialProps } from "./Footer"
import { Footer } from "./Footer/Footer"

interface DefaultLayoutProps {
  navigation: NavLink[]
  dropdown?: ReactNode
  search?: ReactNode
  socials?: SocialProps[]
}

export const DefaultLayout =
  ({ navigation, socials = [], dropdown, search }: DefaultLayoutProps) =>
  (page: ReactElement) => {
    return (
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          <Header links={navigation} dropdown={dropdown} search={search} />
          <main className="flex-grow">{page}</main>
          <Footer socials={socials} />
        </div>
        <Sidebar links={navigation} search={search} />
      </div>
    )
  }
