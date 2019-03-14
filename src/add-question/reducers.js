'use strict'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_TO_LOCAL_STORAGE = 'SAVE_TO_LOCAL_STORAGE'
export const INPUT_QUESTION = 'INPUT_QUESTION' 
export const INPUT_ASKEE = 'INPUT_ASKEE'

export const addQuestion = ({question, askee, status}) =>
({
  type: ADD_QUESTION,
  payload: {
    question,
    askee,
    status
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

// *** Reducers *** //


export const questionsReducer = Object.assign((state = [], action = {}) => {
    switch (action.type) {
        case ADD_QUESTION:
            return [...state, payload]
        default:
            return state
    }
}, {
  slice: 'questions'
})


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

export const getScore = ({questions}) =>
  questions.reduce((a,v) => v.status === "Rejection"
    ? (a + 10)
    : (a + 1), 0)

