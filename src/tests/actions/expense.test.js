import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () =>{
    const action = removeExpense({id: '123abs'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abs'
    });
});

test('should setup edit expense action object ', () => {
    const action = editExpense('123abs', {description: 'ssdsf'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abs',
        updates: {
            description: 'ssdsf'
        }
    });
});

test('should expect add expense action object with provinded values',() => {
    const expenseData = {
        description: 'Rent',
        amount: 500700,
        createdAt: 1000,
        note: "last month"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        },
        
    });
});
test('should expect add expense action object with default values',() => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        },
        
    });
});