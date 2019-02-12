import { connect } from '../utils/connect'
import { addQuestion } from '../actions'
import { AddQuestion } from '../components/AddQuestion'
import { getInputValueFromId } from '../utils/ref'

const mapStateToProps = state => { }

const mapDispatchToProps = dispatch =>
    ({
        onclick: () =>
            dispatch(addQuestion(getInputValueFromId('todo')))

    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

