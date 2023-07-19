import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

async function callback(): Promise<string> {
  console.debug('▶ data')

  const response = {
    fullName: 'Felipe Fontoura',
    birthDate: '1982-02-18',
    gender: 'Masculino',
    email: 'ffontouras@gmail.com',
    emailSignature: 'Atensiosamente, Felipe Fontoura',
  }

  return JSON.stringify(response)
}

export const data: FunctionDeclaration = {
  name: 'data',
  description: 'Retorna meus dados pessoais como nome, idade, etc.',
  parameters: {
    type: 'object',
    properties: {},
    required: [],
  },
  callback,
}
