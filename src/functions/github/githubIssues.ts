import { FunctionDeclaration } from "../../interfaces/FunctionDeclaration"

async function callback({ repository }: { repository?: string }): Promise<string> {
  console.debug("▶ githubIssues", { repository })

  const repositories = [
    {
      name: "openai-chatbot",
      issues: [
        { bugs: 1 },
        { features: 2 }
      ]
    },
    {
      name: "lms",
      issues: [
        { bugs: 1 },
        { features: 2 }
      ]
    }
  ]

  return JSON.stringify(repositories)
}

export const githubIssues: FunctionDeclaration = {
  name: "githubIssues",
  description: "Retorna as issues por tipo em cada projeto.",
  parameters: {
    type: "object",
    properties: {
      repository: {
        type: "string",
        description: "Nome do projeto ou repositório no Github.",
      },
    },
    required: [],
  },
  callback,
}
