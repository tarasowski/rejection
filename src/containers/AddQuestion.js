import { connect } from '../utils/connect'
import { addQuestion, questionInput, askeeInput } from '../actions'
import { AddQuestion } from '../components/AddQuestion'

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

