import React from 'react';
import PropTypes from 'prop-types';

import ExpenseForm from '../ExpenseForm/ExpenseForm';

import './ExpenseFormWrapper.css';

ExpenseFormWrapper.propTypes = {
  onAddExpense: PropTypes.func,
};

function ExpenseFormWrapper(props) {
  const [isExpenseFormVisible, setExpenseFormVisibility] = React.useState(false);

  const saveExpenseData = (formExpenseData) => {
    const expenseData = {
      ...formExpenseData,
      id: Math.random().toString(),
      currency: '$'
    };

    props.onAddExpense(expenseData);
    setExpenseFormVisibility(false);
  };

  const showExpenseForm = () => {
    setExpenseFormVisibility(true);
  };

  const hideExpenseForm = () => {
    setExpenseFormVisibility(false);
  };

  if (!isExpenseFormVisible) {
    return (
        <div className={'new-expense'}>
          <button onClick={showExpenseForm}>Add new expense</button>
        </div>
    );
  }

  return (
      <div className={'new-expense'}>
        <ExpenseForm onSaveExpenseData={saveExpenseData} onCancelExpenseData={hideExpenseForm}/>
      </div>
  );
}

export default ExpenseFormWrapper;