import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral'
export const ExpenseSummary = ({ExpenseCount, ExpenseTotal}) => {
    const expWord = ExpenseCount===1 ? 'expense' : 'expenses';
    const formatedExpenseTotal = numeral(ExpenseTotal/100).format('$0,0.00');
    return(
    <div className="page-header">
        <div className="content-container">
            <h1 
            className="page-header__title"
            >Viewing <span>{ExpenseCount}</span> {expWord} totalling <span>{formatedExpenseTotal}</span>
            </h1>
            <div className="page-header__actions">
                <Link className="login-button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
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