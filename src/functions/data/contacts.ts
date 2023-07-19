import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

import { contacts as data } from '../../data/contacts'

async function callback(): Promise<string> {
  // console.debug('▶ contacts')

  return JSON.stringify(data)
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
