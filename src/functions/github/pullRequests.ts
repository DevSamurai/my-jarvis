import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

async function callback({
  repository,
}: {
  repository?: string
}): Promise<string> {
  console.debug('▶ pullRequests', { repository })

  const repositories = [
    {
      name: 'openai-chatbot',
      pullRequests: 1,
    },
    {
      name: 'lms',
      pullRequests: 2,
    },
  ]

  return JSON.stringify(repositories)
}

export const pullRequests: FunctionDeclaration = {
  name: 'pullRequests',
  description: 'Retorna a quantidade de pull requests de cada repositório.',
  parameters: {
    type: 'object',
    properties: {
      repository: {
        type: 'string',
        description: 'Nome do projeto ou repositório no Github.',
      },
    },
    required: [],
  },
  callback,
}
