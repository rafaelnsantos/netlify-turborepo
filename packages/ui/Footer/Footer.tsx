import { FC } from "react"
import { Social, SocialProps } from "./Social"

interface FooterProps {
  socials: SocialProps[]
}

export const Footer: FC<FooterProps> = ({ socials }) => (
  <footer className="footer footer-center p-10 bg-base-200 text-base-content">
    <div className="grid grid-flow-col gap-6">
      {socials.map((social) => (
        <Social {...social} key={social.href} />
      ))}
    </div>
  </footer>
)
