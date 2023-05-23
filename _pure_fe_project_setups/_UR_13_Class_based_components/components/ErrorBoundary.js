import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    render() {
        if (this.state.hasError) {
            return (<p>Something went wrong!</p>);
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};

export default ErrorBoundary;