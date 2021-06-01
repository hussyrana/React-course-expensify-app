import {login, logout} from '../../actions/auth';

test('should generate login action object', ()=>{
    const action = login('123de');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123de'
    });
});

test('should generate action logout object', ()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});