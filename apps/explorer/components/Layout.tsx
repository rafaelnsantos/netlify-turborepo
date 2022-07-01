import { DefaultLayout } from "ui"
import { navigation } from "../content/navigation"
import { SelectNode } from "./SelectNode"

export const Layout = DefaultLayout({
  navigation,
  dropdown: <SelectNode />,
  search: (
    <input
      placeholder="Search..."
      className="input input-bordered w-full max-w-xs"
    />
  ),
})
