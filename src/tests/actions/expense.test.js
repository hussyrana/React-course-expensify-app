
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense, 
    editExpense, 
    removeExpense, 
    startAddExpense, 
    setExpenses, 
    startSetExpense, 
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'thisismyid';
const defaultAuthState = {auth:{uid}};
beforeEach((done)=>{
    const ExpenseData = {};
    expenses.forEach(({id, description, amount, note, createdAt})=>{
        ExpenseData[id] = {description, amount, note, createdAt};
    });
    database.ref(`users/${uid}/expenses`).set(ExpenseData).then(()=>{
        done();
    });
});

test('should setup remove expense action object', () =>{
    const action = removeExpense({id: '123abs'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abs'
    });
});
test('should setup remove expense from firebase', (done) =>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    })
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
test('should edit expenses from firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {amount:2600};
    store.dispatch(startEditExpense(id, updates)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val().amount).toBe(updates.amount);
        done();

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
    const store = createMockStore(defaultAuthState);
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
       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }); 
});
test('should add expense to database and store with default values',(done)=>{
    const store = createMockStore(defaultAuthState);
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
       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});
test('should setup setExpenses object with data ', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSE',
        expenses
    });
});
test('should get the expense list from the firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpense()).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: "SET_EXPENSE",
        expenses
    });
    done();
});
});