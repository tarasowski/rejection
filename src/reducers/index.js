'use strict'
import {
    ADD_QUESTION,
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

