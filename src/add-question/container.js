import { connect } from '../connect.js' 
import { addQuestion, questionInput, askeeInput } from './reducers.js'
import { AddQuestion } from './component.js'

const mapStateToProps = state => state 

const mapDispatchToProps = dispatch =>
    ({
        onInputQuestion: (e) =>
          dispatch(questionInput(e.target.value)),
        onInputAskee: (e) =>
          dispatch(askeeInput(e.target.value)),
        onButtonClick: (state) =>
          dispatch(addQuestion(state))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddQuestion)

