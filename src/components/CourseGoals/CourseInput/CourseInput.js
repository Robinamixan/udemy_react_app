import React from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    color: ${props => (props.invalid ? 'red' : 'black')};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background-color: ${props => (props.invalid ? '#ef9292' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length > 0) {
      props.onAddGoal(enteredValue);
    } else {
      setIsValid(false);
    }
  };

  return (
      <form onSubmit={formSubmitHandler}>
        <FormControl invalid={!isValid}>
          <label>Course Goal</label>
          <input
              type="text"
              onChange={goalInputChangeHandler}
          />
        </FormControl>
        <Button type="submit">Add Goal</Button>
      </form>
  );
};

export default CourseInput;
