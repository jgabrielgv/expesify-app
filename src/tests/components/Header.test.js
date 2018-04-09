import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header
        startLogout={() => {}}
        />
    );
    // expect(wrapper.find('h1').length).toBe(1);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});

