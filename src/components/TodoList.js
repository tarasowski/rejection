import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, button, pre, input, ul, li } = hh(h);


const todo = onclick => ({ text, completed }) =>
    li({
        onclick,
        style: completed ? 'text-decoration: line-through' : 'text-decoration: none'
    }, text)


const todoList = ({ state: { todos }, dispatch: { onTodoClick } }) => {
    return div({}, [
        ul({}, todos.map(td =>
            todo(() => onTodoClick(td.id))(td)))
    ])
}


export default todoList