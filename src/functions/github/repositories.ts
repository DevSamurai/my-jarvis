import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

import { getRepositories } from './api'

async function callback({ login }: { login?: string }): Promise<string> {
  console.debug('▶ repositories', { login })

  if (!login) return JSON.stringify({ error: 'Login não informado.' })

  const repositories = await getRepositories(login)

  console.debug('☑ repositories', JSON.stringify(repositories, null, 2))

  return JSON.stringify(repositories)
}

export const repositories: FunctionDeclaration = {
  name: 'repositories',
  description: 'Retorna os repositórios de um usuário.',
  parameters: {
    type: 'object',
    properties: {
      login: {
        type: 'string',
        description: 'Login de usuário.',
      },
    },
    required: ['login'],
  },
  callback,
}
