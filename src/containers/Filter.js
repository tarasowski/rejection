import { connect } from '../utils/connect'
import Filter from '../components/Filter'
import { setVisiblityFilter } from '../actions/index'

const mapStateToProps = state => state

const mapDisptachToProps = dispatch => ({
    onFilterClick: filter =>
        dispatch(setVisiblityFilter(filter))
})


export default connect(
    mapStateToProps,
    mapDisptachToProps
)(Filter)