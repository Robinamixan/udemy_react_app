import React from 'react';
import PropTypes from 'prop-types';

import styles from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';

MealItemForm.propTypes = {
  id: PropTypes.string,
  onEnteredAmount: PropTypes.func
};

function MealItemForm(props) {
  const [isValidAmount, setIsValidAmount] = React.useState(true);
  const amountInputRef = React.useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const amount = amountInputRef.current.value;
    const amountNumber = +amount;

    if (amount.trim().length === 0 || amountNumber < 1 || amountNumber > 5) {
      setIsValidAmount(false);
      return;
    }

    props.onEnteredAmount(amountNumber);
  };

  return (
      <form onSubmit={submitHandler} className={styles.form}>
        <Input
            ref={amountInputRef}
            label={'Amount'}
            input={{
              id: 'amount_' + props.id,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1',
            }}
        />
        <button type={'submit'}>+ Add</button>
        {!isValidAmount && <p>Please enter valid amount</p>}
      </form>
  );
}

export default MealItemForm;