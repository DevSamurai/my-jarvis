import { FunctionDeclaration } from "../../interfaces/FunctionDeclaration"

async function callback({ repository }: { repository?: string }): Promise<string> {
  console.debug("▶ githubActionStatus", { repository })

  const repositories = [
    {
      name: "openai-chatbot",
      status: "success",
      description: "Build #1 succeeded (ref-1)",
    },
    {
      name: "lms",
      status: "failure",
      description: "Build #1 failed (ref-1)",
    }
  ]

  return JSON.stringify(repositories)
}

export const githubActionStatus: FunctionDeclaration = {
  name: "githubActionStatus",
  description: "Retorna os status das builds de projetos no Github.",
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
