import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should add an expense', () => {
    const expense =  {
        id: '1',
        description: 'Globes',
        note: '',
        amount: 100,
        createdAt: 345600000
    };
    const action = {  
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses,expense]);
});

test('should edit an expense', () => {
    const amount = 122000;
    const action = {  
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
    const amount = 122000;
    const action = {  
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(state);
});

test('should edit an expense testing whole array', () => {
    const updates =  {
        description: 'Globes',
    };
    const action = {  
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[1],{ ...expenses[2], ...updates }]);
});