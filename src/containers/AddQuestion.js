import { connect } from '../utils/connect'
import { addQuestion } from '../actions'
import { AddQuestion } from '../components/AddQuestion'

const mapStateToProps = state => { }

const mapDispatchToProps = dispatch =>
    ({
        onclick: () =>
            dispatch(addQuestion())
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddQuestion)

