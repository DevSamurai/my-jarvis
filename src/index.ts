import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

import ChatMessage from './interfaces/ChatMessage'

import { createChatCompletion } from './lib/openai'

const rl = readline.createInterface({ input, output, terminal: false })

const prompt = `Você é um assistente virtual de um desenvolvedor de software chamado Jarvis, você deve ajudar com as suas tarefas repetitivas e chatas através das funções programadas.`

let messages: ChatMessage[] = [
  {
    role: 'system',
    content: prompt,
  },
]

async function main() {
  while (true) {
    const content = await rl.question('👤 ')
    messages = [...messages, { role: 'user', content }]

    const message = await createChatCompletion({ messages })
    messages = [...messages.slice(-10), { role: 'assistant', content: message }]

    console.log(`🤖 ${message}`)
  }
}

;(async () => {
  main()
})()
