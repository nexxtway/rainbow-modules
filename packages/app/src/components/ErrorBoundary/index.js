import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './errorMessage';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { errorTrace: null };
    }

    componentDidCatch(error, errorInfo) {
        const { onError } = this.props;
        this.setState({
            errorTrace: errorInfo.componentStack,
        });
        onError(error);
    }

    render() {
        const { errorTrace } = this.state;
        const { children, component: Component } = this.props;
        if (errorTrace) {
            return <Component errorTrace={errorTrace} />;
        }
        return children;
    }
}

ErrorBoundary.propTypes = {
    /** A component that is rendered when an error is caught */
    component: PropTypes.func,
    /** A function triggered when an error is caught */
    onError: PropTypes.func,
    children: PropTypes.node,
};

ErrorBoundary.defaultProps = {
    children: null,
    component: ErrorMessage,
    onError: () => {},
};

export default ErrorBoundary;
