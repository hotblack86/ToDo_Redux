
const reducer = Redux.combineReducers({
      todos: () => {
        return ['groceries', 'make dinner'];
      }
});

const store = Redux.createStore(reducer);

