import { today } from './date/today'

import { githubActionStatus } from './github/githubActionStatus'
import { githubPullRequests } from './github/githubPullRequests'

import { daily } from './sprint/daily'
import { stories } from './sprint/stories'

import { data } from './me/data'
import { contacts } from './me/contacts'

import { send } from './email/send'

export const functionDeclarations = [
  today,
  githubActionStatus,
  githubPullRequests,
  data,
  contacts,
  daily,
  stories,
  send,
]
