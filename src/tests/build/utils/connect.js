"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var connect = exports.connect = function connect() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
    }

    return function (component) {
        return function (state) {
            return function (dispatch) {
                return component(fns.reduce(function (a, c) {
                    return _extends({ state: a(state) }, { dispatch: c(dispatch) });
                }));
            };
        };
    };
};