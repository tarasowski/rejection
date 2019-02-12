import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, input, button , br, span} = hh(h);

export const AddQuestion = ({ dispatch: { onclick } }) => {
    return div({}, [
        span({}, 'Question'),
        br(),
        input({
            type: 'text',
            name: 'question',
            id: 'question',
        }),
        br(),
        br(),
        span({}, 'Askee'),
        br(),
        input({
            type: 'text',
            name: 'askee',
            id: 'askee',
        }),
        br(),
        br(),
        button({
            type: 'submit',
            onclick
        }, 'Rejected')
    ])
}


