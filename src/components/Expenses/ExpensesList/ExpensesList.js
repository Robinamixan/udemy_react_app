import React from 'react';
import PropTypes from 'prop-types';

import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../Card/Card';

import './ExpensesList.css';

ExpensesList.propTypes = {
  expenses: PropTypes.array,
};

function ExpensesList(props) {
  const expenses = props.expenses;

  return (
      <Card className={'expenses'}>
        <ExpenseItem
            title={expenses[0].title}
            price={expenses[0].price}
            date={expenses[0].date}
            currency={expenses[0].currency}
        />
        <ExpenseItem
            title={expenses[1].title}
            price={expenses[1].price}
            date={expenses[1].date}
            currency={expenses[1].currency}
        />
      </Card>
  );
}

export default ExpensesList;