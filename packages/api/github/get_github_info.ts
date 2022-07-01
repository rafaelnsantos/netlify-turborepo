import axios from "axios"

export interface GithubInfo {
  stargazers_count: number
  language: string
  full_name: string
  name: string
  forks_count: string
  description: string
}

const token = process.env.GITHUB_TOKEN

export const get_github_info = async (
  user: string,
  repository: string
): Promise<GithubInfo> => {
  const res = await axios.get<GithubInfo>(
    `https://api.github.com/repos/${user}/${repository}`,
    token ? { headers: { Authorization: `Bearer ${token}` } } : {}
  )

  const {
    full_name,
    language,
    stargazers_count,
    name,
    forks_count,
    description,
  } = res.data

  return {
    full_name,
    language,
    stargazers_count,
    name,
    forks_count,
    description,
  }
}
