/* eslint-disable @next/next/no-img-element */
import { FC } from "react"
import Link from "next/link"
import { ThemeSwitch } from "../ThemeSwitch"

export type NavLink = {
  text: string
  href: string
}

interface HeaderProps {
  logo: string
  links: NavLink[]
}

export const Header: FC<HeaderProps> = ({ logo, links }) => {
  return (
    <header className="bg-base-300 navbar w-full shadow">
      <div className="max-w-5xl mx-auto flex flex-1 justify-between">
        <div className="flex-none sm:hidden">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
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
          <img src={logo} alt="logo" className="h-14 py-2" />
        </div>
        <ThemeSwitch />
        <nav className="flex-none hidden sm:block">
          <ul className="menu menu-horizontal">
            {links.map((link) => (
              <li key={link.text}>
                <Link href={link.href}>
                  <a className="self-center">{link.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
