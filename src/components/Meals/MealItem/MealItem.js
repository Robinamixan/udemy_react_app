import React from 'react';
import PropTypes from 'prop-types';

import styles from './MealItem.module.css';
import MealItemForm from '../MealItemForm/MealItemForm';

MealItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id}/>
        </div>
      </li>
  );
}

export default MealItem;