import Link from "next/link"
import { AnchorHTMLAttributes, FC } from "react"

export interface NavLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
  href: string
}

interface NavigationProps {
  links: NavLink[]
  onClick?: () => void
}

export const Navigation: FC<NavigationProps> = ({ links, onClick }) => (
  <>
    {links.map(({ href, text, ...props }) => (
      <li key={href}>
        <Link href={href}>
          <a {...props} onClick={onClick}>
            {text}
          </a>
        </Link>
      </li>
    ))}
  </>
)
