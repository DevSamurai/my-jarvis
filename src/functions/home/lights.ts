import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration'

async function callback({ place }: { place?: string }): Promise<string> {
  console.debug('▶ lights', { place })

  const places = [
    {
      name: 'sala',
      status: 'on',
    },
    {
      name: 'quarto do casal',
      status: 'off',
    },
    {
      name: 'cozinha',
      status: 'off',
    },
  ]

  return JSON.stringify(places)
}

export const lights: FunctionDeclaration = {
  name: 'lights',
  description: 'Liga ou desliga as luzes da casa.',
  parameters: {
    type: 'object',
    properties: {
      place: {
        type: 'string',
        description: 'Local da casa - quarto, sala, banheiro, etc.',
      },
    },
    required: [],
  },
  callback,
}
