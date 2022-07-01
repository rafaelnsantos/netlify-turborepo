import { FC } from "react"
import { IconProps } from "./DiscordIcon"

export const StarIcon: FC<IconProps> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 488.784 488.784">
    <path
      className="fill-current"
      d="M478.63,219.042l-98.2,80.2c-5.9,4.8-8.5,12.6-6.7,20l29.7,121.3c4.4,19.7-10.6,36-27.4,36c-5,0-10.3-1.5-15.2-4.7
		l-107.4-66c-6.4-3.9-14.4-3.9-20.8,0.1l-106.1,66c-4.9,3.3-10.2,4.7-15.3,4.7c-17.2,0-32.7-16.3-27.3-36l29.7-121.4
		c1.8-7.4-0.8-15.1-6.6-19.9l-96.9-80.1c-19.9-17-8.5-49.7,17-51.1l125.5-9.1c7.5-0.5,14-5.3,16.8-12.2l48-116.6
		c5-12.1,16-18.1,27-18.1s22,6,27,18.1l47.9,116.5c2.8,6.9,9.4,11.6,16.8,12.2l125.5,9.1
		C487.23,169.442,498.53,202.042,478.63,219.042z"
    />
  </svg>
)
