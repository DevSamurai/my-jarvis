import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

async function callback({
  date,
  email,
  subject,
  body,
}: {
  date?: string
  email?: string
  subject?: string
  body?: string
}): Promise<string> {
  // console.debug('▶ send', { date, email, subject, body })

  const response = { date, email, subject, body, status: 'sent' }

  return JSON.stringify(response)
}

export const send: FunctionDeclaration = {
  name: 'send',
  description: 'Envia um email.',
  parameters: {
    type: 'object',
    properties: {
      date: {
        type: 'string',
        description:
          'Data para envio do email no formato ISO 8601. Padrão é a data atual.',
      },
      email: {
        type: 'string',
        description: 'Endereço de email.',
      },
      subject: {
        type: 'string',
        description: 'Assunto do email.',
      },
      body: {
        type: 'string',
        description: 'Corpo do email.',
      },
    },
    required: ['email', 'subject', 'body'],
  },
  callback,
}
