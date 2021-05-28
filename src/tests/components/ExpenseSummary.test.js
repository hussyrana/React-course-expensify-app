import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary';
test('should render expense summary with 1 expense', ()=>{
    const wrapper = shallow(<ExpenseSummary ExpenseCount = {1} ExpenseTotal={95}/>);
    expect(wrapper).toMatchSnapshot();
});
test('should render expense summary with multiple expenses', ()=>{
    const wrapper = shallow(<ExpenseSummary ExpenseCount = {11} ExpenseTotal={111222295}/>);
    expect(wrapper).toMatchSnapshot();
    
});