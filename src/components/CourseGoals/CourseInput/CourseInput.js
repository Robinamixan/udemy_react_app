import React from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
        <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
          <label>Course Goal</label>
          <input
              type="text"
              onChange={goalInputChangeHandler}
          />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
  );
};

export default CourseInput;
