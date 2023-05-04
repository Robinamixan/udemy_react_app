import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './ExpenseForm.css';

ExpenseForm.propTypes = {
  onSaveExpenseData: PropTypes.func,
};

function ExpenseForm(props) {
  const [formInput, setFormInput] = useState({
    titleInput: '',
    priceInput: '',
    dateInput: '',
  });

  const titleChangeHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        titleInput: event.target.value,
      };
    });
  };
  const priceChangeHandler = (event) => {
    setFormInput({
      ...formInput,
      priceInput: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    setFormInput({
      ...formInput,
      dateInput: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: formInput.titleInput,
      price: formInput.priceInput,
      date: new Date(formInput.dateInput),
    };

    props.onSaveExpenseData(expenseData);

    setFormInput({
      titleInput: '',
      priceInput: '',
      dateInput: '',
    });
  };

  return (
      <form onSubmit={submitHandler}>
        <div className={'new-expense__controls'}>
          <div className={'new-expense__control'}>
            <label>Title</label>
            <input
                type={'text'}
                value={formInput.titleInput}
                onChange={titleChangeHandler}
            />
          </div>
          <div className={'new-expense__control'}>
            <label>Price</label>
            <input
                type={'number'}
                value={formInput.priceInput}
                min={'0.01'}
                step={'0.01'}
                onChange={priceChangeHandler}
            />
          </div>
          <div className={'new-expense__control'}>
            <label>Date</label>
            <input
                type={'date'}
                value={formInput.dateInput}
                min={'2020-01-01'}
                max={'2024-12-31'}
                onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className={'new-expense__actions'}>
          <button type={'submit'}>Submit</button>
        </div>
      </form>
  );
}

export default ExpenseForm;