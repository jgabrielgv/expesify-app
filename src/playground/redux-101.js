import { createStore } from 'redux';

 // Action generators

const incrementCount  = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

// Not pure function
let a = 10;
const add = (b) => (a + b);

// Pure function
const add2 = (b) => (a + b);

const countReducer = (state = {count:  0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
          const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
          return {
            count: state.count + incrementBy
          };
        case 'DECREMENT':
          const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
          return {
              count: state.count - decrementBy
          };
        case 'SET':
          return {
              count: action.count
          }
        case 'RESET':
          return {
              count: 0
          };
        default:
          return state;
    }
    
    if(action.type === 'INCREMENT') {
        
    } else {
        return state;
    }
};

const store = createStore(countReducer);

const unsuscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(resetCount());

store.dispatch(setCount({count: 101}));
