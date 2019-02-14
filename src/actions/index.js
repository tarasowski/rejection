import {getInputValueFromId} from '../utils/ref.js'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_TO_LOCAL_STORAGE = 'SAVE_TO_LOCAL_STORAGE'
export const INPUT_QUESTION = 'INPUT_QUESTION' 
export const INPUT_ASKEE = 'INPUT_ASKEE'

export const addQuestion = state =>
({
  type: ADD_QUESTION,
  question: state.userInput.questionInput,
  askee: state.userInput.askeeInput,
  command: {
    type: SAVE_TO_LOCAL_STORAGE
  }
})

export const questionInput = value => 
({
  type: INPUT_QUESTION,
  value
})

export const askeeInput = value =>
({
  type: INPUT_ASKEE,
  value,
})


