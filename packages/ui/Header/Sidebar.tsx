import Link from "next/link"
import { FC } from "react"
import { NavLink } from "./Header"

interface SidebarProps {
  links: NavLink[]
}

export const Sidebar: FC<SidebarProps> = ({ links }) => {
  const handleClick = () => {
    const input = document.getElementById("my-drawer")

    if (input) (input as HTMLInputElement).checked = false
  }

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay" />

      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a onClick={handleClick}>{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
