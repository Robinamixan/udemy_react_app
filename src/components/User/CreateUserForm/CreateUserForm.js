import React from 'react';
import PropTypes from 'prop-types';

import './CreateUserForm.css';
import Button from '../../UI/Button/Button';

CreateUserForm.propTypes = {
  onUserCreate: PropTypes.func,
  onFormError: PropTypes.func
};

function CreateUserForm(props) {
  const usernameInputRef = React.useRef();
  const ageInputRef = React.useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const usernameInputValue = usernameInputRef.current.value;
    const ageInputValue = ageInputRef.current.value;

    if (usernameInputValue.trim().length === 0 || ageInputValue.trim().length === 0) {
      props.onFormError('Empty values entered!');
      return;
    }

    if (+ageInputValue < 1) {
      props.onFormError('Negative age entered!');
      return;
    }

    props.onUserCreate({
      name: usernameInputValue,
      age: ageInputValue
    });

    // not recommended action
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
      <form className={'create-user-form'} onSubmit={formSubmitHandler}>
        <div className={'form-control'}>
          <label htmlFor={'username'}>Username</label>
          <input
              ref={usernameInputRef}
              id={'username'}
              type="text"
          />
        </div>
        <div className={'form-control'}>
          <label htmlFor={'user-age'}>Age (Years)</label>
          <input
              ref={ageInputRef}
              id={'user-age'}
              type="number"
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
  );
}

export default CreateUserForm;