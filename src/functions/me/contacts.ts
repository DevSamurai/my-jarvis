import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

async function callback(): Promise<string> {
  console.debug('▶ contacts')

  const response = [
    {
      fullName: 'Angelina',
      email: 'angelina@example-mail.com',
      role: 'gerente',
    },
  ]

  return JSON.stringify(response)
}

export const contacts: FunctionDeclaration = {
  name: 'contacts',
  description:
    'Retorna meus contatos de trabalho como nome, email, cargo, etc.',
  parameters: {
    type: 'object',
    properties: {},
    required: [],
  },
  callback,
}
