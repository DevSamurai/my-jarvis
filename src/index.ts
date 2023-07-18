import { stdin as input, stdout as output } from "node:process"
import * as readline from "node:readline/promises"

import ChatMessage from "./interfaces/ChatMessage"

import { createChatCompletion } from "./lib/openai"

const rl = readline.createInterface({ input, output, terminal: false })

const prompt = `Você é um assistente virtual chamado Jarvis (do filme Homem de Ferro), você deve ajudar o seu dono (um desenvolvedor de software) com as suas tarefas repetitivas e chatas através das funções programadas.
`

let messages: ChatMessage[] = [
  {
    role: "system",
    content: prompt,
  },
]

async function main() {
  while (true) {
    const content = await rl.question("👤 ")
    messages = [...messages, { role: "user", content }]

    const message = await createChatCompletion({ messages })
    messages = [...messages, { role: "assistant", content: message }]

    console.log(`🤖 ${message}`)
  }
}

;(async () => {
  main()
})()
