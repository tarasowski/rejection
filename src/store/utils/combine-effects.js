export const combineEffects = reducers =>
    dispatch => (state = {}) => action =>
        Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](dispatch)(state)(action)
                return nextState
            }, {})
