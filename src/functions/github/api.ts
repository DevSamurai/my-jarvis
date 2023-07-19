import { gql, GraphQLClient } from 'graphql-request'
import { parse } from 'graphql'

import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

import { config } from '../../lib/config'

const endpoint = 'https://api.github.com/graphql'

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${config.github.token}`,
  },
})

interface Repository {
  name: string
  url: string
  description: string
  isPrivate: boolean
}

export async function getRepositories(
  login?: string,
): Promise<Repository[] | undefined> {
  if (!login) return

  const document: TypedDocumentNode<
    {
      user: {
        repositories: {
          nodes: Repository[]
        }
      }
    },
    Record<string, string | number>
  > = parse(gql`
    query getRepositories($login: String!) {
      user(login: $login) {
        repositories(first: 50) {
          nodes {
            name
            url
            description
            isPrivate
          }
        }
      }
    }
  `)

  const response = await graphQLClient.request(document, { login })

  return response?.user?.repositories?.nodes
}

interface PullRequest {
  number: number
  mergeable: string
  body: string
  closed: boolean
  author: {
    login: string
  }
}

export async function getPullRequests(
  owner?: string,
  name?: string,
): Promise<PullRequest[] | undefined> {
  if (!owner || !name) return

  const document: TypedDocumentNode<
    {
      repository: {
        pullRequests: {
          edges: {
            node: PullRequest
          }[]
        }
      }
    },
    Record<string, string | number>
  > = parse(gql`
    query getPullRequests($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        pullRequests(last: 10) {
          edges {
            node {
              number
              mergeable
              body
              closed
              author {
                login
              }
            }
          }
        }
      }
    }
  `)

  const response = await graphQLClient.request(document, { owner, name })

  return response?.repository?.pullRequests?.edges?.map((edge) => edge.node)
}

interface Issue {
  number: number
  body: string
  closed: boolean
  closedAt: string
  author: {
    login: string
  }
}

export async function getIssues(
  owner?: string,
  name?: string,
): Promise<Issue[] | undefined> {
  if (!owner || !name) return

  const document: TypedDocumentNode<
    {
      repository: {
        issues: {
          edges: {
            node: Issue
          }[]
        }
      }
    },
    Record<string, string | number>
  > = parse(gql`
    query getIssues($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        issues(last: 10) {
          edges {
            node {
              number
              body
              closed
              closedAt
              author {
                login
              }
            }
          }
        }
      }
    }
  `)

  const response = await graphQLClient.request(document, { owner, name })

  return response?.repository?.issues?.edges?.map((edge) => edge.node)
}
