import React from 'react';
import { shallow } from 'enzyme';
// import { findByTestAttr } from './test/testUtils';
import '../../setupTests';
import InputField from '../InputField';

const setup = () => {
  shallow(<InputField />);
};
