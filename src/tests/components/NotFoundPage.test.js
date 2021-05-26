import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import {shallow} from 'enzyme';

test('render not found page correctly', () => {
    const warpper = shallow(<NotFoundPage/>);
    expect(warpper).toMatchSnapshot();
});