import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageFunctionCall,
  Configuration,
  OpenAIApi,
} from 'openai'

import ChatMessage from '../interfaces/ChatMessage'

import { functionDeclarations } from '../functions'

import { config } from './config'

const configuration = new Configuration({
  apiKey: config.openAI.apiToken,
})

const openai = new OpenAIApi(configuration)

export async function createChatCompletion({
  messages,
}: {
  messages: ChatMessage[]
}): Promise<string> {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      temperature: 0.7,
      max_tokens: 1024,
      messages,
      functions: functionDeclarations,
      function_call: 'auto',
    })

    // https://platform.openai.com/docs/guides/gpt/chat-completions-api
    // const finishReason = response.data.choices[0]?.finish_reason

    // if (finishReason) {
    //   console.debug(`✋ ${finishReason}`)
    // }

    const message = response.data.choices[0]?.message

    if (message?.function_call) {
      const functionChatCompletionRequestMessage = await callFunction(
        message?.function_call,
      )

      if (functionChatCompletionRequestMessage) {
        return await createChatCompletion({
          messages: [...messages, functionChatCompletionRequestMessage],
        })
      }
    }

    return message?.content as string
  } catch (error) {
    console.error('🔴 error on run openai', { error })
    return undefined as unknown as string
  }
}

async function callFunction(
  functionCall: ChatCompletionRequestMessageFunctionCall | undefined,
): Promise<ChatCompletionRequestMessage | undefined> {
  if (!functionCall) return

  const functionName = functionCall?.name
  const functionParameters =
    !!functionCall?.arguments && JSON.parse(functionCall?.arguments)
  const functionReturn = await functionDeclarations
    .find((item) => item.name === functionName)
    ?.callback(functionParameters)

  return { role: 'function', name: functionName, content: functionReturn }
}
