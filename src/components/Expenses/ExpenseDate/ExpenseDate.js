import React from 'react';
import PropTypes from 'prop-types';

import './ExpenseDate.css';

ExpenseDate.propTypes = {
  date: PropTypes.instanceOf(Date),
};

function ExpenseDate(props) {
  const monthString = props.date.toLocaleString('en-US', {month: 'long'});
  const yearNumber = props.date.getFullYear();
  const dayNumber = props.date.toLocaleString('en-US', {day: '2-digit'});

  return (
      <div className={'expense-date'}>
        <div className={'expense-date__month'}>{monthString}</div>
        <div className={'expense-date__year'}>{yearNumber}</div>
        <div className={'expense-date__day'}>{dayNumber}</div>
      </div>
  );
}

export default ExpenseDate;