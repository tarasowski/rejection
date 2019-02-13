'use strict'
import {
    ADD_QUESTION,
    INPUT_QUESTION, 
    INPUT_ASKEE,
} from '../actions/index'


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

