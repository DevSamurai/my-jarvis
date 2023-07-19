import { today } from './date/today'

import { pullRequests } from './github/pullRequests'
import { issues } from './github/issues'
import { repositories } from './github/repositories'

import { daily } from './sprint/daily'
import { stories } from './sprint/stories'

import { contacts } from './data/contacts'

import { send } from './email/send'

export const functionDeclarations = [
  today,
  contacts,
  pullRequests,
  issues,
  repositories,
  daily,
  stories,
  send,
]
