export const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text

});
export const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT',
    
});
export const sortByDate = () =>({
    type: 'SORT_BY_DATE',
    
});
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_STARTDATE',
    startDate
});
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_ENDDATE',
    endDate
})