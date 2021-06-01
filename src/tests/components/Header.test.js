import React from 'react';
import {Header} from '../../components/Header';
import {shallow} from 'enzyme';

test('render Header correctly', () => {
    const warpper = shallow(<Header startLogout = {()=>{}}/>);
    expect(warpper).toMatchSnapshot();
});

test('should call startLogout on Button click', ()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
