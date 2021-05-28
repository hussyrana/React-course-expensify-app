import SelectExpensesTotal from '../../selectors/expensesTotal';
import enzyme from 'enzyme';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const resp = SelectExpensesTotal([]);
    expect(resp).toBe(0);
});
test('should return amount if single expense', () => {
    const resp = SelectExpensesTotal([expenses[0]]);
    expect(resp).toBe(10);
});
test('should return Totalamount if multiple expense', () => {
    const resp = SelectExpensesTotal(expenses);
    expect(resp).toBe(560);
});