'use strict'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_TO_LOCAL_STORAGE = 'SAVE_TO_LOCAL_STORAGE'
export const INPUT_QUESTION = 'INPUT_QUESTION' 
export const INPUT_ASKEE = 'INPUT_ASKEE'

export const addQuestion = state =>
({
  type: ADD_QUESTION,
  question: state.userInput.questionInput,
  askee: state.userInput.askeeInput,
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

// *** Reducers *** //

const question = (state = {}) => action => {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                question: action.question,
                askee: action.askee,
                status: 'Rejected'
            }
        default:
            return state
    }
}

export const questions = (state = []) => action => {
    switch (action.type) {
        case ADD_QUESTION:
            return [...state, question()(action)]
        default:
            return state
    }
}


export const userInput = (state = {}) => action => {
  switch (action.type) {
    case INPUT_QUESTION:
      return {...state, questionInput: action.value}
    case INPUT_ASKEE:
      return {...state, askeeInput: action.value}
    case ADD_QUESTION:
      return {...state, askeeInput: '', questionInput: ''}
    default:
      return state

  }
}

