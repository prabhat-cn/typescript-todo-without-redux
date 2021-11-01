import React from 'react';
import { shallow } from 'enzyme';
// import { findByTestAttr } from './test/testUtils';
import '../setupTests';
import App from '../App';
// import { render, screen } from '@testing-library/react';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const setup = () => {
  return shallow(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  // console.log('wrapper->', wrapper.debug());
  // const appComponent = findByTestAttr(wrapper, 'component-app');
  const appComponent = wrapper.find("[data-test='component-app']");
  // expect(appComponent.length).toBe(1);
  expect(appComponent).toHaveLength(1);
});
