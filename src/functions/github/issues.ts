import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

import { getIssues } from './api'

async function callback({
  repository,
}: {
  repository?: string
}): Promise<string> {
  console.debug('▶ issues', { repository })

  if (!repository) return JSON.stringify([])

  const issues = await getIssues(repository)

  return JSON.stringify(issues)
}

export const issues: FunctionDeclaration = {
  name: 'issues',
  description: 'Retorna as issues por tipo em cada projeto.',
  parameters: {
    type: 'object',
    properties: {
      repository: {
        type: 'string',
        description:
          'Nome do projeto ou repositório no Github no formato OWNER/REPO.',
      },
    },
    required: [],
  },
  callback,
}
