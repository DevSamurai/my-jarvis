import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

async function callback({
  date,
  notes,
}: {
  date?: string
  notes?: string
}): Promise<string> {
  console.debug('▶ daily', { date, notes })

  const daily = [
    {
      date: new Date().toString(),
      yesterday: [
        {
          pullRequests: [
            { id: 1, title: 'PR #1', status: 'approved' },
            { id: 10, title: 'PR #10', status: 'rejected' },
            { id: 11, title: 'PR #10', status: 'rejected' },
          ],
          bugs: [
            { id: 1, title: 'Bug #1', status: 'approved' },
            { id: 20, title: 'Bug #1', status: 'approved' },
            { id: 100, title: 'Bug #1', status: 'approved' },
          ],
          helps: ['Júnior com o problema na imagem doker'],
        },
      ],
      today: [
        {
          stories: [{ id: 30, title: 'Login' }],
        },
      ],
      impediment: [],
      notes,
    },
  ]

  return JSON.stringify(daily)
}

export const daily: FunctionDeclaration = {
  name: 'daily',
  description:
    'Retorna os dados da minha daily para informação em reunião ou para minha gerente, o que eu fiz ontem, o que farei hoje e se há impedimentos.',
  parameters: {
    type: 'object',
    properties: {
      date: {
        type: 'string',
        description:
          'Data que se refere a daily, se não informado, assume a data atual.',
      },
      notes: {
        type: 'string',
        description: 'Notas adicionais.',
      },
    },
    required: [],
  },
  callback,
}
