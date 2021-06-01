import authReducer from '../../reducers/auth';

test('should login with uid', ()=>{
        const action = {
            type: 'LOGIN',
            uid: '123jc'
        }
        const state = authReducer({}, action);
        expect(state.uid).toBe(action.uid);
});

test('should logout', ()=>{
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'any'}, action);
    expect(state).toEqual({});
});