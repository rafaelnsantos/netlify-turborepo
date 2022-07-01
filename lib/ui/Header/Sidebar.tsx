import { FC, ReactNode, useRef } from "react"
import { Navigation, NavLink } from "./Navigation"

interface SidebarProps {
  links: NavLink[]
  search?: ReactNode
}

export const Sidebar: FC<SidebarProps> = ({ links, search }) => {
  const ref = useRef<HTMLLabelElement>(null)

  const handleClick = () => ref.current?.click()

  return (
    <div className="drawer-side">
      <label ref={ref} htmlFor="my-drawer" className="drawer-overlay" />
      <div className="menu p-4 overflow-y-auto w-80 bg-base-100 space-y-3">
        {search}
        <Navigation links={links} onClick={handleClick} />
      </div>
    </div>
  )
}
