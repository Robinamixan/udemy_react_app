import React from 'react';
import PropTypes from 'prop-types';

import ExpenseForm from '../ExpenseForm/ExpenseForm';

import './ExpenseFormWrapper.css';

ExpenseFormWrapper.propTypes = {
  onAddExpense: PropTypes.func,
};

function ExpenseFormWrapper(props) {
  const saveExpenseData = (formExpenseData) => {
    const expenseData = {
      ...formExpenseData,
      id: Math.random().toString(),
      currency: '$'
    };

    props.onAddExpense(expenseData);
  };

  return (
      <div className={'new-expense'}>
        <ExpenseForm onSaveExpenseData={saveExpenseData}/>
      </div>
  );
}

export default ExpenseFormWrapper;