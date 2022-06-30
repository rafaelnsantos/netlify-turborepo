import { FC, useRef } from "react"
import { Navigation, NavLink } from "./Navigation"

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
        <Navigation links={links} onClick={handleClick} />
      </ul>
    </div>
  )
}
