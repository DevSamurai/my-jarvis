import axios from 'axios'

export async function getRepositories(org?: string) {
  if (!org) return

  const response = await axios.get(`https://api.github.com/orgs/${org}/repos`)

  return response.data
}

export async function getIssues(repository?: string) {
  if (!repository) return

  const response = await axios.get(
    `https://api.github.com/repos/${repository}/issues`,
  )

  return response.data
}
