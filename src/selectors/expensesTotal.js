export default (expenses) => {
    return expenses.reduce((TotalAmount, expense) => {    
        return TotalAmount + expense.amount;
    }, 0);
};