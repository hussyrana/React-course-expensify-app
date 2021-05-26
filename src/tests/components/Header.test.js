import React from 'react';
import Header from '../../components/Header';
import {shallow} from 'enzyme';

test('render Header correctly', () => {
    const warpper = shallow(<Header/>);
    expect(warpper).toMatchSnapshot();
});