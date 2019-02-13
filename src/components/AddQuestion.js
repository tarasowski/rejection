import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, input, button , br, span} = hh(h);

export const AddQuestion = ({state,  dispatch: { onButtonClick, onInputQuestion, onInputAskee } }) => {
    return div({}, [
        span({}, 'Question'),
        br(),
        input({
            type: 'text',
            value: state.userInput.questionInput,
            name: 'question',
            id: 'question',
            oninput: e => onInputQuestion(e)
        }),
        br(),
        br(),
        span({}, 'Askee'),
        br(),
        input({
            type: 'text',
            value: state.userInput.askeeInput,
            name: 'askee',
            id: 'askee',
            oninput: e => onInputAskee(e)
        }),
        br(),
        br(),
        button({
            type: 'submit',
            onclick: () => onButtonClick(state)
        }, 'Rejected')
    ])
}


