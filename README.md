# Redux Boilerplate

* [Here is the list of all examples](https://redux.js.org/introduction/examples)

## Some rules

* Reducers must be pure functions [Source](https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44)

* Reducers should return a new object. You can do `Object.assign({}, state, {thingToChange})` or `{...obj, thingToChange}``

* Array parameters are also references. Don't use `push(), pop(), shift(), unshift(), reverse(), splice() etc.`instead use `concat()` e.g. [Dan Abramov Explains](https://egghead.io/lessons/react-redux-avoiding-array-mutations-with-concat-slice-and-spread)

```js
const chatReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHAT:
      return Object.assign({}, state, {
        chatLog: state.chatLog.concat(payload)
      });
    default: return state;
  }
};
```

* Use constants for action types and better names instead of `CHANGE_MESSAGE`better `CHAT::CHANGE_MESSAGE`. 

* Use Actions creators to handle impure logic and all sorts of side-effects

```js
/ Action creators can be impure.
export const addChat = ({
  // cuid is safer than random uuids/v4 GUIDs
  // see usecuid.org
  id = cuid(),
  msg = '',
  user = 'Anonymous',
  timeStamp = Date.now()
} = {}) => ({
  type: ADD_CHAT,
  payload: { id, msg, user, timeStamp }
});
```
> As you can see above, we’re using cuid to generate random ids for each chat message, and `Date.now()` to generate the time stamp. Both of those are impure operations which are not safe to run in the reducer — but it’s perfectly OK to run them in action creators.

* Test your reducers. Also very good example by [Dan Abramov](https://egghead.io/lessons/react-redux-writing-a-counter-reducer-with-tests)

```js
describe('addChat()', ({ test }) => {
  test('with no arguments', ({ same, end}) => {
    const msg = 'should add default chat message';

    const actual = pipe(
      () => reducer(undefined, addChat()),
      // make sure the id and timestamp are there,
      // but we don't care about the values
      state => {
        const chat = state.chatLog[0];
        chat.id = !!chat.id;
        chat.timeStamp = !!chat.timeStamp;
        return state;
      }
    )();

    const expected = Object.assign(createState(), {
      chatLog: [{
        id: true,
        user: 'Anonymous',
        msg: '',
        timeStamp: true
      }]
    });

    same(actual, expected, msg);
    end();
  });


  test('with all arguments', ({ same, end}) => {
    const msg = 'should add correct chat message';

    const actual = reducer(undefined, addChat({
      id: 1,
      user: '@JS_Cheerleader',
      msg: 'Yay!',
      timeStamp: 1472322852682
    }));
    const expected = Object.assign(createState(), {
      chatLog: [{
        id: 1,
        user: '@JS_Cheerleader',
        msg: 'Yay!',
        timeStamp: 1472322852682
      }]
    });

    same(actual, expected, msg);
    end();
  });
});
```
