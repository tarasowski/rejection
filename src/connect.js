export const connect = (...fns) => component => state => dispatch => {
    return component(fns.reduce((a, c) => ({ ...{ state: a(state) }, ...{ dispatch: c(dispatch) } })))
}
