import moment from 'moment';


const filterreducerDefaultState = {
    text: '',
    sortBy: 'date', 
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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
export default filterReducer;