import React from 'react';
import PropTypes from 'prop-types';

import './CreateUserForm.css';
import Button from '../../UI/Button/Button';

CreateUserForm.propTypes = {
  createUserHandler: PropTypes.func
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

    props.createUserHandler({
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
          <label>Username</label>
          <input type="text" value={formValues.name} onChange={nameChangeHandler}/>
        </div>
        <div className={'form-control'}>
          <label>Age (Years)</label>
          <input type="number" value={formValues.age} onChange={ageChangeHandler}/>
        </div>
        <Button type="submit">Add User</Button>
      </form>
  );
}

export default CreateUserForm;