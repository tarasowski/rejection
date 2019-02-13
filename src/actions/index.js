import {getInputValueFromId} from '../utils/ref.js'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_TO_LOCAL_STORAGE = 'SAVE_TO_LOCAL_STORAGE'

export const addQuestion = ({
  question = getInputValueFromId('question'), 
  askee = getInputValueFromId('askee')} = {}) =>
({
  type: ADD_QUESTION,
  question,
  askee,
  command: {
    type: SAVE_TO_LOCAL_STORAGE,
    question,
    askee
  } 
})
