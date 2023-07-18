import { ChatCompletionFunctions } from "openai"

export interface FunctionDeclaration extends ChatCompletionFunctions {
  callback: (parameters: Object) => Promise<string>
}
