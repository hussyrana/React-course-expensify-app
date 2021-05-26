import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy = 1} ={}) =>({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ( {count}) => ({
    type: 'SET',
    count
});
const resetCount = () => ({
    type: 'RESET',
});

const countReducer = (state = {count:0}, Action ) => {
    switch(Action.type){
        case "INCREMENT":
            return {
            count: state.count + Action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - Action.decrementBy
            };
        case "SET":
            return {
                count: Action.count
            };
        case "RESET":
            return{
                count: 0
            };
        default:
            return state;
    }
    
}
const store = createStore(countReducer);

store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 3
// });
store.dispatch(decrementCount({decrementBy: 3}));
// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount({count: 102}));
store.dispatch(resetCount());