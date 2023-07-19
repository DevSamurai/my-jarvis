import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

import { getIssues } from './api'

async function callback({
  owner,
  name,
}: {
  owner?: string
  name?: string
}): Promise<string> {
  // console.debug('▶ issues', { owner, name })

  if (!owner || !name) return JSON.stringify({ error: 'Missing owner or name' })

  const issues = await getIssues(owner, name)

  // console.debug('☑ issues', JSON.stringify(issues, null, 2))

  return JSON.stringify(issues)
}

export const issues: FunctionDeclaration = {
  name: 'issues',
  description: 'Retorna as issues por tipo em cada projeto.',
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
