import { githubActionStatus } from "./github/githubActionStatus"
import { githubPullRequests } from "./github/githubPullRequests"

import { daily } from "./sprint/daily"

import { data } from './me/data'
import { contacts } from './me/contacts'

import { send } from "./email/send"

import { today } from "./date/today"

// import { lights } from "./home/lights"

export const functionDeclarations = [
  githubActionStatus,
  githubPullRequests,
  data,
  contacts,
  daily,
  send,
  // lights
  today
]
