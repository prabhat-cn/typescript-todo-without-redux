import React from 'react';
import { shallow } from 'enzyme';
// import { findByTestAttr } from './test/testUtils';
import '../../setupTests';
import InputField from '../InputField';

const propsValues = {
  todo: '',
  setTodo: ,
  handleAdd: (e: React.FormEvent<EventTarget>) => void,

}

const setup = ({todo, setTodo, handleAdd}: propsValues) => {
  shallow(<InputField />);
};
