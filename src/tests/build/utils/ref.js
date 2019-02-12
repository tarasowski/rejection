'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getInputValueFromId = exports.getInputValueFromId = function getInputValueFromId(id) {
    return document.getElementById(id) === null ? '' : document.getElementById(id).value;
};