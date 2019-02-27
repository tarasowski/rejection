import {userInput, questions, INPUT_QUESTION, ADD_QUESTION, INPUT_ASKEE} from  './reducers.js'
import {expect} from 'expect.equal'

//RITE
//Readable -> ok
//Isolated / Integrated -> ok
//Thorough -> not ok?
//Explicit -> ok

// 5 Qs:
// Component under test
// Behavior we're testing
// Actual
// Expected
// Replication

const testInputQuestion = actual => action => expected =>
  expect(userInput(actual)(action))
    .toEqual(expected, 'userInput() - INPUT_QUESTION -> should return a property questionInput')

testInputQuestion({})
({
  type: INPUT_QUESTION, 
  value: 'How to be a good man?'
})
({ 
  questionInput: 'How to be a good man?' 
}) 

const testInputAskee = actual => action => expected =>
  expect(userInput(actual)(action))
    .toEqual(expected, 'userInput() - INPUT_ASKEE -> should return a property askeeInput')

testInputAskee({})
({
  type: INPUT_ASKEE, 
  value: 'Seneca'
})
({
  askeeInput: 'Seneca'
})

const testAddQuestionInput = actual => action => expected =>
  expect(userInput(actual)(action))
    .toEqual(expected, 'userInput() - ADD_QUESTION -> should clear all user inputs')

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

const testAddQuestionState = actual => action => expected =>
  expect(questions(actual)(action))
    .toEqual(expected, 'question() - ADD_QUESTION -> should return an array with an object')
    
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
