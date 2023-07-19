import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

async function callback({ date }: { date?: string }): Promise<string> {
  console.debug('▶ stories', { date })

  const response = [
    {
      date: new Date().toString(),
      stories: [
        { id: 30, title: 'Login', assigne: 'Felipe Fontoura' },
        { id: 32, title: 'Logout', assigne: 'Junior Fernandes' },
      ],
    },
  ]

  return JSON.stringify(response)
}

export const stories: FunctionDeclaration = {
  name: 'stories',
  description: 'Retorna as stories do projeto.',
  parameters: {
    type: 'object',
    properties: {
      date: {
        type: 'string',
        description:
          'Data que se refere a stories, se não informado, assume a data atual.',
      },
    },
    required: [],
  },
  callback,
}
