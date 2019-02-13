import {userInput} from  '../../reducers/index.js'
import {INPUT_QUESTION} from '../../actions/index.js' 
import {expect} from 'expect.equal'

const testUserInput = before => action => after =>
  expect(
    userInput(before)(action)
    ).toEqual(after)


testUserInput({})({type: INPUT_QUESTION, value: 'hello'})({ questionInput: 'hello' }) 
