import React from 'react';

import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../Card/Card';

import './ExpenseItem.css';
import PropTypes from 'prop-types';

ExpenseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  price: PropTypes.number,
  currency: PropTypes.string,
};

function ExpenseItem(props) {
  return (
      <Card className={'expense-item'}>
        <ExpenseDate date={props.date}/>
        <div className={'expense-item__description'}>
          <h2>{props.title}</h2>
          <div className={'expense-item__price'}>
            {props.currency + props.price}
          </div>
        </div>
      </Card>
  );
}

export default ExpenseItem;