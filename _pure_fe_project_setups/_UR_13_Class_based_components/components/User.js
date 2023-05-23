import React, { Component } from 'react';

import classes from './User.module.css';
import PropTypes from 'prop-types';

class User extends Component {
    componentWillUnmount() {
        console.log('unmounted!');
    }

    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }
}

// Same Component but with functional implementation
// const User = (props) => {
//     return <li className={classes.user}>{props.name}</li>;
// };

User.propTypes = {
    name: PropTypes.string,
};

export default User;
