import { FunctionDeclaration } from "../../interfaces/FunctionDeclaration"

async function callback(): Promise<string> {
  console.debug("▶ today", { })

  const response = { date: '2023-07-18 19:42:00' }

  return JSON.stringify(response)
}

export const today: FunctionDeclaration = {
  name: "today",
  description: "Retorna a data e hora atual.",
  parameters: {
    type: "object",
    properties: {},
    required: [],
  },
  callback,
}
