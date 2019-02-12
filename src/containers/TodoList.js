import { connect } from '../utils/connect'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'


const getVisibleTodos = ({ todos, visibilityFilter: filter }) =>
    filter === 'SHOW_ALL'
        ? todos
        : filter === 'SHOW_COMPLETED'
            ? todos.filter(td => td.completed)
            : filter === 'SHOW_ACTIVE'
                ? todos.filter(td => !td.completed)
                : todos


const mapStateToProps = state => ({
    todos: getVisibleTodos(state)
})



const mapDisptachToProps = dispatch => ({
    onTodoClick: id =>
        dispatch(toggleTodo(id))
})


export default connect(
    mapStateToProps,
    mapDisptachToProps
)(TodoList)