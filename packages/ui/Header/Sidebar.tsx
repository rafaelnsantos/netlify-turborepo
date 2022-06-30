import Link from "next/link"
import { FC, useRef } from "react"
import { NavLink } from "./Header"

interface SidebarProps {
  links: NavLink[]
}

export const Sidebar: FC<SidebarProps> = ({ links }) => {
  const ref = useRef<HTMLLabelElement>(null)

  const handleClick = () => ref.current?.click()

  return (
    <div className="drawer-side">
      <label ref={ref} htmlFor="my-drawer" className="drawer-overlay" />

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
