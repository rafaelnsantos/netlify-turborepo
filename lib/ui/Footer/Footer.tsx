import {
  faDiscord,
  faGithub,
  faReddit,
  faTelegram,
  faTwitter,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnchorHTMLAttributes, FC } from "react"

export interface SocialProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconDefinition
}

const socials: SocialProps[] = [
  {
    href: "//github.com/Kindelia",
    "aria-label": "Github page",
    icon: faGithub,
  },
  {
    href: "//discord.gg/kindelia",
    "aria-label": "Discord",
    icon: faDiscord,
  },
  {
    href: "//t.me/kindelia",
    "aria-label": "Telegram",
    icon: faTelegram,
  },
  {
    href: "//twitter.com/KindeliaOrg",
    "aria-label": "Twitter",
    icon: faTwitter,
  },
  {
    href: "//reddit.com/r/Kindelia/",
    "aria-label": "Reddit",
    icon: faReddit,
  },
]

export const Footer: FC = () => (
  <footer className="footer footer-center p-10 bg-base-100 text-base-content">
    <div className="grid grid-flow-col gap-6">
      {socials.map(({ icon, ...social }) => (
        <a key={social.href} {...social} target="_blank" rel="noreferrer">
          <FontAwesomeIcon size="2x" icon={icon} />
        </a>
      ))}
    </div>
  </footer>
)
