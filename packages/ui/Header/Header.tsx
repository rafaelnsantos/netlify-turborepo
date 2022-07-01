import { FC, ReactNode } from "react"
import { ThemeSwitch } from "../ThemeSwitch"
import { KindeliaIcon } from "../icons/KindeliaIcon"
import { Navigation, NavLink } from "./Navigation"
import Link from "next/link"

interface HeaderProps {
  links: NavLink[]
  dropdown?: ReactNode
  search?: ReactNode
}

export const Header: FC<HeaderProps> = ({ links, dropdown, search }) => {
  return (
    <header className="bg-base-100 bg-opacity-90 navbar w-full shadow top-0 sticky z-20 backdrop-blur">
      <div className="max-w-5xl mx-auto flex flex-1 justify-between">
        <div className="flex-none md:hidden">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
        <div className="flex-1 flex justify-start">
          <Link href="/">
            <a aria-label="Go to homepage">
              <KindeliaIcon size={48} />
            </a>
          </Link>
          <div className="self-center ml-2">{dropdown}</div>
        </div>
        <div className="hidden md:block md:mr-2 w-60">{search}</div>
        <ThemeSwitch />
        <nav className="flex-none hidden md:block">
          <ul className="menu menu-horizontal rounded-lg">
            <Navigation links={links} />
          </ul>
        </nav>
      </div>
    </header>
  )
}
