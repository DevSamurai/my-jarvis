import { ChatCompletionFunctions } from 'openai'

export interface FunctionDeclaration extends ChatCompletionFunctions {
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback: (parameters: Object) => Promise<string>
}
