import React, { Component } from 'react';
import User from './User';

import classes from './Users.module.css';
import PropTypes from 'prop-types';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            showUsers: true,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.users.length === 0) {
            throw new Error('No user provided!');
        }
    };

    toggleUsersHandler() {
        this.setState((curState) => {
            return {
                showUsers: !curState.showUsers,
            };
        });
    }

    render() {
        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name}/>
                ))}
            </ul>
        );

        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        );
    }
}

// Same Component but with functional implementation
// const Users = () => {
//     const [showUsers, setShowUsers] = React.useState(true);
//
//     const toggleUsersHandler = () => {
//         setShowUsers((curState) => !curState);
//     };
//
//     const usersList = (
//         <ul>
//             {DUMMY_USERS.map((user) => (
//                 <User key={user.id} name={user.name}/>
//             ))}
//         </ul>
//     );
//
//     return (
//         <div className={classes.users}>
//             <button onClick={toggleUsersHandler}>
//                 {showUsers ? 'Hide' : 'Show'} Users
//             </button>
//             {showUsers && usersList}
//         </div>
//     );
// };

Users.propTypes = {
    users: PropTypes.array,
};

export default Users;
