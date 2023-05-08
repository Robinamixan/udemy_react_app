import React from 'react';

import UserList from './components/User/UserList/UserList';
import CreateUserForm from './components/User/CreateUserForm/CreateUserForm';

import './App.css';
import ErrorPopup from './components/UI/ErrorPopup/ErrorPopup';

function App() {
  const [users, setUsers] = React.useState([]);
  const [popupState, setPopupState] = React.useState({
    message: '',
    isVisible: false,
  });

  const usersExist = users.length > 0;

  const createUserHandler = (enteredValues) => {
    setUsers((prevState) => {
      return [
        {
          id: Math.random(),
          name: enteredValues.name,
          age: +enteredValues.age,
        },
        ...prevState,
      ];
    });
  };

  const showPopupHandler = (message) => {
    setPopupState({
      message: message,
      isVisible: true,
    });
  };

  const hidePopupHandler = () => {
    setPopupState({
      message: '',
      isVisible: false,
    });
  };

  return (
      <div>
        <section id={'create-user-form'}>
          <CreateUserForm onUserCreate={createUserHandler} onFormError={showPopupHandler}/>
        </section>
        <section id={'create-form-popup'}>
          {
              popupState.isVisible && <ErrorPopup
                  onClose={hidePopupHandler}
                  title={'Invalid Input'}
                  message={popupState.message}
              />
          }
        </section>
        {
            usersExist && <section id={'users-list'}>
              <UserList users={users}/>
            </section>
        }
      </div>
  );
}

export default App;