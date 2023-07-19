import dotenv from 'dotenv'

dotenv.config()

export const config = {
  openAI: {
    apiToken: process.env.OPENAI_API_KEY,
  },
  github: {
    token: process.env.GITHUB_TOKEN,
  },
}
