import {SAVE_TO_LOCAL_STORAGE} from '../add-question/reducers.js'

export const perform = dispatch => state => ({command}) => {
  switch(command.type) {
    case SAVE_TO_LOCAL_STORAGE:
    localStorage.setItem('questions',JSON.stringify(state.questions))
      break
    default:
      return state
}
}
