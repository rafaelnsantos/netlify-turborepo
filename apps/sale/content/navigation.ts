import { NavLink } from "ui/Header"
import { EXPLORER_URL } from "./env"

export const navigation: NavLink[] = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "Explore",
    href: EXPLORER_URL,
    target: "_blank",
    rel: "noreferrer",
  },
]
