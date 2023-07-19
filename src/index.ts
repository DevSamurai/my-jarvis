import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

import ChatMessage from './interfaces/ChatMessage'

import { createChatCompletion } from './lib/openai'

import { me } from './data/me'

const rl = readline.createInterface({ input, output, terminal: false })

const prompt = `Você é um assistente virtual de um desenvolvedor de software, você deve lhe ajudar com as suas tarefas repetitivas e chatas através das funções programadas.

Seus dados pessoais são: ${JSON.stringify(me)}
`

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
