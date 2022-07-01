import { NextSeo, NextSeoProps } from "next-seo"
import { FC, ReactNode } from "react"
import { classNames } from "./utils"

interface PageProps extends NextSeoProps {
  children: ReactNode
  className?: string
}

export const Page: FC<PageProps> = ({ children, className, ...seo }) => (
  <div
    className={classNames(
      className,
      "max-w-4xl mx-auto p-2 md:px-0 overflow-x-auto"
    )}
  >
    <NextSeo {...seo} />
    {children}
  </div>
)
