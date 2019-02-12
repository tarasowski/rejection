"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var combineReducers = exports.combineReducers = function combineReducers(reducers) {
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return function (action) {
            return Object.keys(reducers).reduce(function (nextState, key) {
                nextState[key] = reducers[key](state[key])(action);
                return nextState;
            }, {});
        };
    };
};