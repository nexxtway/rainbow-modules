import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './errorMessage';

class Crashes extends Component {
    constructor(props) {
        super(props);
        this.state = { errorTrace: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            errorTrace: errorInfo.componentStack,
        });
    }

    render() {
        const { errorTrace } = this.state;
        const { children } = this.props;
        if (errorTrace) {
            return <ErrorMessage errorTrace={errorTrace} />;
        }
        return children;
    }
}

Crashes.propTypes = {
    children: PropTypes.node,
};

Crashes.defaultProps = {
    children: null,
};

export default Crashes;
