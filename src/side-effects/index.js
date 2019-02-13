const {SAVE_TO_LOCAL_STORAGE} = require('../actions/index.js')

export const perform = dispatch => state => ({command}) => {
  switch(command.type) {
    case SAVE_TO_LOCAL_STORAGE:
    document.getElementById('question').value = ''
    document.getElementById('askee').value = ''
    localStorage.setItem('question',JSON.stringify(state))
      break
    default:
      return state
}
}
