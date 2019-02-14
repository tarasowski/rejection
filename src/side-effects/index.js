const {SAVE_TO_LOCAL_STORAGE} = require('../actions/index.js')

export const perform = dispatch => state => ({command}) => {
  switch(command.type) {
    case SAVE_TO_LOCAL_STORAGE:
    localStorage.setItem('questions',JSON.stringify(state.questions))
      break
    default:
      return state
}
}
