import { combineReducers } from '../utils/combine-reducers'
import {questions} from '../reducers/index'

export const store = combineReducers({
    questions: questions, // key = state field, value = reducer function
})

