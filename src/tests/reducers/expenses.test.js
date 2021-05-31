import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});
test('should not remove expense if id not found', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});
test('should add expence to store', () =>{
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[1]
        }
    };
    const state = expenseReducer(undefined, action);
    expect(state).toEqual([expenses[1]]);
});
test('should edit expence and save to store', () =>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'mobile'
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state[0]).toEqual({...expenses[0], description: 'mobile'});
});
test('should not edit expence if id not found', () =>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'mobile'
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state[0]).toEqual({...expenses[0]});
});
test('should set expenses', ()=>{
    const action = {
        type: "SET_EXPENSE",
        expenses: [expenses[1]]
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1]]); 
});