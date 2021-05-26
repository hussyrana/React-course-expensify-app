import React from 'react';
import ExpenceDashboardPage from '../../components/ExpenceDashboardPage';
import {shallow} from 'enzyme';

test('render dashboard page correctly', () => {
    const warpper = shallow(<ExpenceDashboardPage/>);
    expect(warpper).toMatchSnapshot();
});