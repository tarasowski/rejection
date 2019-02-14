import {userInput, questions} from  '../../reducers/index.js'
import {INPUT_QUESTION, ADD_QUESTION, INPUT_ASKEE} from '../../actions/index.js' 
import {expect} from 'expect.equal'

const testInputQuestion = before => action => after =>
  expect(
    userInput(before)(action)
    ).toEqual(after, 'userInput() - INPUT_QUESTION -> should return a property questionInput')

testInputQuestion({})
({
  type: INPUT_QUESTION, 
  value: 'How to be a good man?'
})
({ 
  questionInput: 'How to be a good man?' 
}) 

const testInputAskee = before => action => after =>
  expect(
    userInput(before)(action)
    ).toEqual(after, 'userInput() - INPUT_ASKEE -> should return a property askeeInput')

testInputAskee({})({type: INPUT_ASKEE, value: 'Seneca'})({askeeInput: 'Seneca'})

const testAddQuestionInput = before => action => after =>
  expect(
    userInput(before)(action)
    ).toEqual(after, 'userInput() - ADD_QUESTION -> should clear all user inputs')

testAddQuestionInput({})
({
  type: ADD_QUESTION,
  question: 'What is a virtue',
  askee: 'Marc Aurelius'
})    
({
  askeeInput: '',
  questionInput: '',
})

const testAddQuestionState = before => action => after =>
  expect(
    questions(before)(action)
    ).toEqual(after, 'question() - ADD_QUESTION -> should return an array with an object')
    
testAddQuestionState([])
({
  type: ADD_QUESTION,
  question: 'Would you like to teach me stoic philosophy?',
  askee: 'Zeno'
})
([{
  question: 'Would you like to teach me stoic philosophy?',
  askee: 'Zeno',
  status: 'Rejected'
}]) 
