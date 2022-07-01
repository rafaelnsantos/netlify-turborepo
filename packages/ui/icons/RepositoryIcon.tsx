import { FC } from "react"
import { IconProps } from "./DiscordIcon"

export const RepositoryIcon: FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path
      className="fill-current"
      d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7zM7 5v2h2V5H7zm0 3v2h2V8H7zm0 3v2h2v-2H7z"
    />
  </svg>
)
