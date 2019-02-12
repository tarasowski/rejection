import {getInputValueFromId} from '../utils/ref.js'
export const ADD_QUESTION = 'ADD_QUESTION'

export const addQuestion = (getValue = getInputValueFromId) =>
({
  type: ADD_QUESTION,
  question: getValue('question'),
  askee: getValue('askee')
})
