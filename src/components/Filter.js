import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, button, pre, input, ul, li, p, span } = hh(h);

const filterLink = onFilterClick => filter => ({ value, visibilityFilter }) =>
    visibilityFilter === filter
        ? span({ style: 'margin-right: 0.5em' }, value)
        : span({
            style: 'margin-right: 0.5em; text-decoration: underline; color: blue',
            onclick: () => onFilterClick(filter)
        }, value)


const footer = ({ state: { visibilityFilter }, dispatch: { onFilterClick } }) =>
    div({}, [
        span({}, 'Show: '),
        filterLink(onFilterClick)('SHOW_ALL')({ value: 'Show all', visibilityFilter }),
        filterLink(onFilterClick)('SHOW_ACTIVE')({ value: 'Show Active', visibilityFilter }),
        filterLink(onFilterClick)('SHOW_COMPLETED')({ value: 'Show Completed', visibilityFilter })

    ])


export default footer