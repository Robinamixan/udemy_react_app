import React from 'react';
import PropTypes from 'prop-types';

import ExpenseItems from '../ExpenseItems/ExpenseItems';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../../Card/Card';

import './ExpensesList.css';

ExpensesList.propTypes = {
  expenses: PropTypes.array,
};

function ExpensesList(props) {
  const [expenseFilter, setExpenseFilter] = React.useState({
    year: '2020',
  });

  const expenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === expenseFilter.year;
  });

  const filterUpdateHandler = (filterData) => {
    setExpenseFilter({
      year: filterData.year,
    });
  };

  return (
      <Card className={'expenses'}>
        <ExpenseFilter
            currentFilter={expenseFilter}
            onFilterUpdate={filterUpdateHandler}
        />
        <ExpenseItems expenses={expenses}/>
      </Card>
  );
}

export default ExpensesList;