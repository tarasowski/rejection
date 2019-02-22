import {ADD_QUESTION} from '../add-question/reducers.js'

export const addQuestionEffect = dispatch => state => action  => {
  switch(action.type) {
    case ADD_QUESTION:
    localStorage.setItem('questions',JSON.stringify(state.questions))
      break
    default:
      return state
}
}
