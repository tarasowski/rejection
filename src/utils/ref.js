export const getInputValueFromId = id =>
    document.getElementById(id) === null ? '' : document.getElementById(id).value