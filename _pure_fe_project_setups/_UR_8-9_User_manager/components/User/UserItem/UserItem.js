import React from 'react';
import PropTypes from 'prop-types';

import './UserItem.css';

UserItem.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

function UserItem(props) {
  return (
      <div className={'user-item'}>
        <div className={'user-item__title'}>
          {`${props.name} (${props.age} years old)`}
        </div>
      </div>
  );
}

export default UserItem;