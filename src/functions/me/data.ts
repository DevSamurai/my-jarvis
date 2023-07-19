import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

async function callback(): Promise<string> {
  console.debug('▶ data')

  const response = {
    fullName: 'Felipe Fontoura',
    birthDate: '1982-02-18',
    gender: 'Masculino',
    email: {
      personal: 'ffontouras@gmail.com',
      work: 'felipe@devsamurai.com.br',
      signature: 'Atensiosamente, Felipe Fontoura',
    },
    phone: {
      mobile: '+55 11 9 9999-9999',
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/felipefontoura/',
      github: 'https://github.com/DevSamurai',
    },
    techSkills: [
      { name: 'JavaScript', level: 'Avançado' },
      { name: 'TypeScript', level: 'Intermediário' },
      { name: 'HTML', level: 'Avançado' },
      { name: 'CSS', level: 'Avançado' },
      { name: 'Node.js', level: 'Intermediário' },
    ],
    softSkills: ['Comunicação', 'Trabalho em equipe', 'Liderança'],
    experience: [
      {
        company: 'DevSamurai',
        role: 'Desenvolvedor Fullstack',
        date: '2016 - Atual',
      },
    ],
  }

  return JSON.stringify(response)
}

export const data: FunctionDeclaration = {
  name: 'data',
  description:
    'Retorna meus dados pessoais como nome, data de nascimento, gênero, email, telefone e redes sociais.',
  parameters: {
    type: 'object',
    properties: {},
    required: [],
  },
  callback,
}
