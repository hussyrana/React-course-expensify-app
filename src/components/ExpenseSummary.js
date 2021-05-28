import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral'
export const ExpenseSummary = ({ExpenseCount, ExpenseTotal}) => {
    const expWord = ExpenseCount===1 ? 'expense' : 'expenses';
    const formatedExpenseTotal = numeral(ExpenseTotal/100).format('$0,0.00');
    return(
    <h1>Viewing {ExpenseCount} {expWord} totalling {formatedExpenseTotal}</h1>
    );

};

const mapStateToProps = (state) => {
    
     const expenses = selectExpenses(state.expenses, state.filters)
    
    return{
        ExpenseCount: expenses.length,
        ExpenseTotal: expensesTotal(expenses)

    }
};

export default connect(mapStateToProps)(ExpenseSummary);