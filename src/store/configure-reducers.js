import { combineReducers } from './utils/combine-reducers.js'
import {questions, userInput} from '../add-question/reducers.js'

export const store = combineReducers({
    questions: questions, // key = state field, value = reducer function
    userInput: userInput
})

