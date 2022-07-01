import { FC } from "react"
import { IconProps } from "./DiscordIcon"

export const ForkIcon: FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 512 512">
    <path
      d="M124,166.291V345.709a76,76,0,1,0,32,0V282H308a80.091,80.091,0,0,0,80-80V165.311a75.983,75.983,0,1,0-32,1.733V202a48.055,48.055,0,0,1-48,48H156V166.291a76,76,0,1,0-32,0ZM324,92a44,44,0,1,1,44,44A44.049,44.049,0,0,1,324,92ZM184,420a44,44,0,1,1-44-44A44.049,44.049,0,0,1,184,420ZM140,48A44,44,0,1,1,96,92,44.049,44.049,0,0,1,140,48Z"
      className="fill-current"
    />
  </svg>
)
