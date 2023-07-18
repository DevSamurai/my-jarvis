import { FunctionDeclaration } from "../../interfaces/FunctionDeclaration"

async function callback({ date, yesterday, today, impediment }: { date?: string, yesterday?: string, today?: string, impediment?: string }): Promise<string> {
  console.debug("▶ daily", { date, yesterday, today, impediment })

  const daily = [
    { date: '2021-09-01', yesterday: 'Fechei os PRs #1, #2 e #3', today: 'Irei fazer os PRs #4 e #5', impediment: 'Não há' },
  ]

  return JSON.stringify(daily)
}

export const daily: FunctionDeclaration = {
  name: "daily",
  description: "Retorna os dados da minha daily para informação em reunião ou para minha gerente, o que eu fiz ontem, o que farei hoje e se há impedimentos.",
  parameters: {
    type: "object",
    properties: {
      date: {
        type: "string",
        description: "Data que se refere a daily, se não informado, assume a data atual.",
      },
      yesterday: {
        type: "string",
        description: "O que eu fiz ontem, se não informado, assuma como OK.",
      },
      today: {
        type: "string",
        description: "O que eu fiz ontem, se não informado, assuma como 'irei resolver os PRs e Bugs no Github'.",
      },
      impediment: {
        type: "string",
        description: "Se há algum impedimento, se não informado, assuma como 'Sem impedimentos'.",
      },
    },
    required: [],
  },
  callback,
}
