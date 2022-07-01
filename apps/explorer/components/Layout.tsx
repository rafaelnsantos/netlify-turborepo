import { DefaultLayout } from "ui"
import { navigation } from "../content/navigation"
import { socials } from "../content/socials"
import { SelectNode } from "./SelectNode"

export const Layout = DefaultLayout({
  navigation,
  socials,
  dropdown: <SelectNode />,
  search: (
    <input
      placeholder="Search..."
      className="input input-bordered w-full max-w-xs"
    />
  ),
})
