import { FC } from "react"
import { ThemeSwitch } from "../ThemeSwitch"
import { KindeliaIcon } from "../icons/KindeliaIcon"
import { Navigation, NavLink } from "./Navigation"

interface HeaderProps {
  logo: string
  links: NavLink[]
}

export const Header: FC<HeaderProps> = ({ logo, links }) => {
  return (
    <header className="bg-base-200 navbar w-full shadow">
      <div className="max-w-5xl mx-auto flex flex-1 justify-between">
        <div className="flex-none sm:hidden">
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
        <div className="flex-1 px-2 mx-2 flex justify-center sm:justify-start">
          <KindeliaIcon size={48} />
        </div>
        <ThemeSwitch />
        <nav className="flex-none hidden sm:block">
          <ul className="menu menu-horizontal">
            <Navigation links={links} />
          </ul>
        </nav>
      </div>
    </header>
  )
}
