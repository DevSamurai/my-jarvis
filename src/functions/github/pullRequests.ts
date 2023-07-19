import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'
import { getPullRequests } from './api'

async function callback({
  owner,
  name,
}: {
  owner?: string
  name?: string
}): Promise<string> {
  console.debug('▶ pullRequests', { owner, name })

  if (!owner || !name) return JSON.stringify({ error: 'Missing owner or name' })

  const pullRequests = await getPullRequests(owner, name)

  console.debug('☑ pullRequests', JSON.stringify(pullRequests, null, 2))

  return JSON.stringify(pullRequests)
}

export const pullRequests: FunctionDeclaration = {
  name: 'pullRequests',
  description: 'Retorna os pull requests de cada repositório.',
  parameters: {
    type: 'object',
    properties: {
      owner: {
        type: 'string',
        description: 'Proprietário do repostório.',
      },
      name: {
        type: 'string',
        description: 'Nome do repositório.',
      },
    },
    required: ['owner', 'name'],
  },
  callback,
}
