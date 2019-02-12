'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var TOGGLE_TODO = exports.TOGGLE_TODO = 'TOGGLE_TODO';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

var addTodo = exports.addTodo = function (counter) {
    return function (value) {
        return {
            type: ADD_TODO,
            id: counter++,
            text: value
        };
    };
}(1);

var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id: id
    };
};

var setVisiblityFilter = exports.setVisiblityFilter = function setVisiblityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    };
};