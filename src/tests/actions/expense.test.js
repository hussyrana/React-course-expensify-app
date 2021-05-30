
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense, editExpense, removeExpense, startAddExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[0]
        
    });
});
test('should add expense to database and store',(done)=>{
    const store = createMockStore({});
    const expenseData = {
                description: 'bill',
                amount: 100,
                createdAt: 10,
                note: 'last month'
            };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        }); 
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }); 
});
test('should add expense to database and store with default values',(done)=>{
    const store = createMockStore({});
    const expenseData = {
                description: '',
                amount: 0,
                createdAt: 0,
                note: ''
            };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        }); 
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});