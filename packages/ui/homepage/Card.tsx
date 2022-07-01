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
        reverse ? "md:flex-row-reverse" : "",
        "flex flex-col md:flex-row justify-between items-center space-y-5"
      )}
    >
      <div
        className={classNames("flex-1 prose", reverse ? "sm:pl-8" : "sm:pr-8")}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <GithubCard {...repo} color={color} />
    </div>
  )
}
