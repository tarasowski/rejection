import createElement from 'virtual-dom/create-element';
import { diff, patch } from 'virtual-dom';
import view from './containers/App'
import { store } from './store/configureStore'

function render(update, view, node) {
  let state = update({})('INIT')
  let currentView = view(dispatch)(state)
  let rootNode = createElement(currentView)
  node.appendChild(rootNode)
  function dispatch(action) {
    state = update(state)(action)
    const updatedView = view(dispatch)(state)
    const patches = diff(currentView, updatedView)
    rootNode = patch(rootNode, patches)
    currentView = updatedView
  }
}

const rootNode = document.getElementById('app')

render(store, view, rootNode)

