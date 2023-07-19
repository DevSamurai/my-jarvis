import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'
import { getRepositories } from './api'

async function callback({ org }: { org?: string }): Promise<string> {
  console.debug('▶ repositories', { org })

  const repositories = await getRepositories(org)

  return JSON.stringify(repositories)
}

export const repositories: FunctionDeclaration = {
  name: 'repositories',
  description: 'Retorna os repositórios.',
  parameters: {
    type: 'object',
    properties: {
      org: {
        type: 'string',
        description: 'Nome da organização do projeto. Valores: me ou @org.',
      },
    },
    required: [],
  },
  callback,
}
