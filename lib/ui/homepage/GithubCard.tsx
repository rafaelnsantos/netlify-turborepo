import { GithubInfo } from "api/github"
import { FC } from "react"
import { ForkIcon, RepositoryIcon, StarIcon } from "../icons"

export interface GithubCardProps extends GithubInfo {
  color: string
}

export const GithubCard: FC<GithubCardProps> = (repo) => (
  <a
    href={`https://github.com/${repo.full_name}`}
    target="_blank"
    rel="noreferrer"
    className="flex flex-col justify-center rounded-lg p-4 h-full w-56 space-y-2 prose border-1 shadow-md"
  >
    <div className="flex flex-row space-x-3 items-center">
      <RepositoryIcon size={18} />
      <div className="mt-0 font-bold text-lg">{repo.full_name}</div>
    </div>
    <div className="text-sm">{repo.description}</div>
    <div className="flex flex-row space-x-3 items-center text-sm">
      <div className="flex flex-row space-x-1 items-center">
        <div
          className="badge badge-xs"
          style={{ background: repo.color, borderColor: repo.color }}
        />
        <div>{repo.language}</div>
      </div>
      <div className="flex flex-row space-x-1 items-center">
        <StarIcon size={12} />
        <div>{repo.stargazers_count}</div>
      </div>
      <div className="flex flex-row space-x-1 items-center">
        <ForkIcon size={12} />
        <div>{repo.forks_count}</div>
      </div>
    </div>
  </a>
)
