import { describe } from 'riteway';
import { questionsReducer, addQuestion, getScore } from './reducers';

describe('questionsReducer', async assert => {
  {
    assert({
      given: 'no arguments',
      should: 'return the valid default state',
      actual: questionsReducer(),
      expected: []
    });
  }
});

describe('addQuestion action creator', async assert => {
  {
    const question = {
      askee: 'Boss',
      question: 'May I have a raise?',
      status: 'Rejected'
    };
    assert({
      given: 'a question object',
      should: 'add a question to state',
      actual: questionsReducer(undefined, addQuestion(question)),
      expected: [question]
    });
  }
});

describe('getScore selector', async assert => {
  const initialState = questionsReducer();
  const actions = [
    addQuestion({
      askee: 'Boss',
      question: 'May I have a raise?',
      status: 'Rejected'
    }),
    addQuestion({
      askee: 'Boss',
      question: 'May I have a raise?',
      status: 'Rejected'
    }),
    addQuestion({
      askee: 'Boss',
      question: 'May I have a raise?',
      status: 'Accepted'
    }),
  ];
  const state = actions.reduce(questionReducer, initialState);

  assert({
    given: 'Some questions',
    should: 'return the correct score',
    actual: getScore({ questions: state }),
    expected: 21
  });
});

