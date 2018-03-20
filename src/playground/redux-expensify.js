import { createStore, combineReducers } from 'redux';
import configureStore from '../store/configureStore';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

 const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 3, createdAt: 1000 }));
 const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 100, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(addExpense({ description: 'Clothes', amount: 10 }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

 store.dispatch(setStartDate(-1001)); // start date 125
// store.dispatch(setStartDate()); // start date undefined
 store.dispatch(setEndDate(2000)); // end date 1250

 store.dispatch(setTextFilter('rent'));

// const demoState = {
//     expenses: [{
//         id: 'ootottt',
//         description: 'January Rent',
//         note: 'This was the final payment for that address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };

// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     ...user,
//     location: 'Philadelphia',
//     age: 27
// });
