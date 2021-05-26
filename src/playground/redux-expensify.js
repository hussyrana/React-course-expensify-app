import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ({description = '', note = '', amount='', createdAt=''}={}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt 
    } 
});
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

});
const editExpense = (id = '', updates = '') =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text

});
const sortByAmount = (amount = '') =>({
    type: 'SORT_BY_AMOUNT',
    amount
});
const sortByDate = (date = '') =>({
    type: 'SORT_BY_DATE',
    date
});
const setStartDate = (startDate = undefined) => ({
    type: 'SET_STARTDATE',
    startDate
});
const setEndDate = (endDate = undefined) => ({
    type: 'SET_ENDDATE',
    endDate
})
const expensereducerDefaultState = []; 

const expenseReducer = (state = expensereducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({id}) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if(expense.id===action.id){
                    return{
                        ...expense,
                        ...action.updates
                    };
                }
                else{
                    return expense;
                }
            });
        default:
            return state;
    }
};
const filterreducerDefaultState = {
    text: 'ren',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterreducerDefaultState, action) => {
    switch(action.type){
        case "TEXT_FILTER":
            return{
                ...state,
                text: action.text
            }; 
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: 'amount'
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: 'date'
            };
        case "SET_STARTDATE":
            return{
                ...state,
                startDate: action.startDate
            };
        case "SET_ENDDATE":
            return{
                ...state,
                endDate: action.endDate
            };    
        default:
            return state;
    }
};

const GetVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
    const startDateMatch= typeof startDate !=='number' || expense.createdAt >= startDate;
    const endDateMatch =  typeof endDate !== 'number' || expense.createdAt <= endDate;   
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;        
    }).sort((a,b) =>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 : -1 ;
        } 
        else if(sortBy==='amount'){
            return a.amount < b.amount ? 1 : -1 ;
        }
    });
    
};
const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = GetVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses); 
});

const expense1 = store.dispatch(addExpense({description: 'rent', amount: '100', createdAt: '1000'}));
const expense2 = store.dispatch(addExpense({description: 'coffee', amount: '300', createdAt: '1000'}));
// store.dispatch(removeExpense({id: expense1.expense.id}));
// store.dispatch(editExpense(expense2.expense.id, {amount: '500'}));
 //store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
   store.dispatch(setStartDate(30));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate());
const demoState = {
    expenses: [{
        id: 'ffgfbfb',
        description: 'january rent',
        note: 'this is the final rent',
        amount: '54500',
        createdAt: '0'

    }],
    filters: {
        text: 'rent',
        sortBy: 'date', //date or amount 
        startDate: undefined,
        endDate: undefined
    }
}