import { FC } from "react"
import { GithubInfo } from "api/github"
import { classNames } from "../utils"
import { GithubCard } from "./GithubCard"

interface CardProps {
  title: string
  description: string
  repo: GithubInfo
  reverse?: boolean
  color: string
}

export const Card: FC<CardProps> = ({
  title,
  description,
  reverse,
  repo,
  color,
}) => {
  return (
    <div
      className={classNames(
        { "md:flex-row-reverse": reverse },
        "flex flex-col md:flex-row justify-between items-center space-y-5"
      )}
    >
      <div
        className={classNames(
          "flex-1 prose text-center md:text-left",
          reverse ? "md:pl-8" : "md:pr-8"
        )}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <GithubCard {...repo} color={color} />
    </div>
  )
}
