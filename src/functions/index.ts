import { today } from './date/today'

import { pullRequests } from './github/pullRequests'
import { issues } from './github/issues'
import { repositories } from './github/repositories'

import { daily } from './sprint/daily'
import { stories } from './sprint/stories'

import { data } from './me/data'
import { contacts } from './me/contacts'

import { send } from './email/send'

export const functionDeclarations = [
  today,
  pullRequests,
  issues,
  repositories,
  data,
  contacts,
  daily,
  stories,
  send,
]
