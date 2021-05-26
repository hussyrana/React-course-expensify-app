import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


let AddExpense, history, wrapper;
beforeEach(()=>{
    AddExpense = jest.fn();
     history = {push: jest.fn()};
     wrapper = shallow(<AddExpensePage AddExpense={AddExpense} history={history}/>);
});

test('should render add expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
test('should handle on submit', ()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(AddExpense).toHaveBeenLastCalledWith(expenses[1]);

});