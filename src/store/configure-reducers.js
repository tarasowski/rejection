import { combineReducers } from './utils/combine-reducers.js'
import {questionsReducer, userInput} from '../add-question/reducers.js'

export const store = combineReducers({
    [questions.slice]: questions, // key = state field, value = reducer function
    userInput: userInput
})

