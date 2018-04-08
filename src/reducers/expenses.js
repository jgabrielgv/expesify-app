const expensesReducerDefaultState = [];

// Expenses reducer
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates //spread the properties we want to update
                    }
                }
                return expense;
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};