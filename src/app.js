import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './/store/configureStore';
import {addExpense} from './/actions/expenses';
import {setTextFilter} from './/actions/filters';
import GetVisibleExpenses from './/selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss'; 
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', note: 'jan', amount:'2000'}));
store.dispatch(addExpense({description: 'gas bill', note: 'feb', amount:'4500', createdAt: '1000'}));
store.dispatch(addExpense({description: 'rent', note: 'feb', amount:'61500'}));


const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
    );

ReactDOM.render(jsx, document.getElementById('app'));