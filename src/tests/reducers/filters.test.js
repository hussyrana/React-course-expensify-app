import moment from 'moment';
import filterReducer from '../../reducers/filters'

test('should set default filter object values', ()=>{
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});
test('set sort by to amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});
test('should set sort by date', () => {
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});
test('should set filter by text', () => {
    const action = {
        type: 'TEXT_FILTER',
        text: 'rent'
    };
    const state = filterReducer(undefined, action);
    expect(state.text).toBe(action.text);
});
test('should set filter by start date', () => {
    const action = {
        type: 'SET_STARTDATE',
        startDate: 1000
};
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(action.startDate);
});
test('should set filter by end date', () => {
    const action = {
        type: 'SET_ENDDATE',
        endDate: 1000
};
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(action.endDate);
});