import { NavLink } from "ui/Header"
import { SALE_URL } from "./env"

export const navigation: NavLink[] = [
  {
    text: "Interact",
    href: "/interact",
  },
  {
    text: "Blocks",
    href: "/blocks",
  },
  {
    text: "Functions",
    href: "/functions",
  },
  {
    text: "Sale",
    href: SALE_URL,
    target: "_blank",
    rel: "noreferrer",
  },
]
