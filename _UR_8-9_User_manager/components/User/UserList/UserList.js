import React from 'react';
import PropTypes from 'prop-types';

import UserItem from '../UserItem/UserItem';

import './UserList.css';

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  })).isRequired,
};

function UserList(props) {
  return (
      <div className={'users-list'}>
        {props.users.map(user => {
          return <UserItem key={user.id} name={user.name} age={user.age}/>;
        })}
      </div>
  );
}

export default UserList;