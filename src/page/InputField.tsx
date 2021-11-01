import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

// const InputField = ({ todo, setTodo }: Props) => {
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  // because ref is added in HtmlInputElement if Form the hover on the tag and add FormElement
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div data-test="component-input">
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          // for design blur property after add value then colour normal
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
          className="input__box"
        />
        <button className="input_submit">Go</button>
      </form>
    </div>
  );
};

InputField.propTypes = {
  todo: PropTypes.string.isRequired,
  setTodo: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default InputField;
