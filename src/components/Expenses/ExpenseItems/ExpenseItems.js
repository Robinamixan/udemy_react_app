import React from 'react';
import PropTypes from 'prop-types';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

import './ExpenseItems.css';

ExpenseItems.propTypes = {
  expenses: PropTypes.array,
};

function ExpenseItems(props) {
  const expenses = props.expenses;

  if (expenses.length === 0) {
    return <h2 className={'expenses-list__fallback'}>Found no expenses</h2>;
  }

  return (
      <ul className={'expenses-list'}>
        {
          expenses.map((expense) => <ExpenseItem
              key={expense.id}
              title={expense.title}
              price={expense.price}
              date={expense.date}
              currency={expense.currency}
          />)
        }
      </ul>
  );
}

export default ExpenseItems;