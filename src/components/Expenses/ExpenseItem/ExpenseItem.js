import React, {useState} from 'react';

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
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle('Updated!');
  }

  return (
      <li>
        <Card className={'expense-item'}>
          <ExpenseDate date={props.date}/>
          <div className={'expense-item__description'}>
            <h2>{title}</h2>
            <div className={'expense-item__price'}>
              {props.currency + props.price}
            </div>
          </div>
          <button onClick={clickHandler}>Change title</button>
        </Card>
      </li>
  );
}

export default ExpenseItem;