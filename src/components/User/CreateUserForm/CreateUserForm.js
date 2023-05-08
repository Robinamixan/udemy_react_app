import React from 'react';
import PropTypes from 'prop-types';

import './CreateUserForm.css';
import Button from '../../UI/Button/Button';

CreateUserForm.propTypes = {
  onUserCreate: PropTypes.func,
  onFormError: PropTypes.func
};

function CreateUserForm(props) {
  const [formValues, setFormValues] = React.useState({
    name: '',
    age: ''
  });

  const nameChangeHandler = (event) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        name: event.target.value.trim()
      };
    });
  };

  const ageChangeHandler = (event) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        age: event.target.value.trim()
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (formValues.name.trim().length === 0 || formValues.age.trim().length === 0) {
      props.onFormError('Empty values entered!');
      return;
    }

    if (+formValues.age < 1) {
      props.onFormError('Negative age entered!');
      return;
    }

    props.onUserCreate({
      name: formValues.name,
      age: formValues.age
    });

    setFormValues({
      name: '',
      age: ''
    });
  }

  return (
      <form className={'create-user-form'} onSubmit={formSubmitHandler}>
        <div className={'form-control'}>
          <label htmlFor={'username'}>Username</label>
          <input id={'username'} type="text" value={formValues.name} onChange={nameChangeHandler}/>
        </div>
        <div className={'form-control'}>
          <label htmlFor={'user-age'}>Age (Years)</label>
          <input id={'user-age'} type="number" value={formValues.age} onChange={ageChangeHandler}/>
        </div>
        <Button type="submit">Add User</Button>
      </form>
  );
}

export default CreateUserForm;