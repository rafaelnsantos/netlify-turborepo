import { AnchorHTMLAttributes, FC } from "react"
import { IconProps } from "../icons"

export interface SocialProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Icon: FC<IconProps>
}

export const Social: FC<SocialProps> = ({ Icon, ...props }) => (
  <a {...props} target="_blank" rel="noreferrer">
    <Icon size={36} />
  </a>
)
