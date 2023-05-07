import React from 'react';

import UserList from './components/User/UserList/UserList';
import CreateUserForm from './components/User/CreateUserForm/CreateUserForm';

import './App.css';
import ErrorPopup from './components/UI/ErrorPopup/ErrorPopup';

function App() {
  const [users, setUsers] = React.useState([]);
  const [popupState, setPopupState] = React.useState({
    message: 'Invalid Value',
    isVisible: false,
  });

  const usersExist = users.length > 0;

  const createUserHandler = (enteredValues) => {
    if (!enteredValues.name || !enteredValues.age) {
      setPopupState({
        message: 'Entered empty values!',
        isVisible: true,
      });

      return;
    }

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

  const hidePopupHandler = () => {
    setPopupState({
      message: 'Entered empty values!',
      isVisible: false,
    });
  };

  return (
      <div>
        <section id={'create-user-form'}>
          <CreateUserForm createUserHandler={createUserHandler}/>
        </section>
        <section id={'create-form-popup'}>
          {
              popupState.isVisible && <ErrorPopup hidePopup={hidePopupHandler} isVisible={true} message={'Invalid input'}/>
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