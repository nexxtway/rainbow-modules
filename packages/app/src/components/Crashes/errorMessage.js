import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-rainbow-components';
import { ErrorContainer, ErrorText, Title, SecondTitle } from './styled';
import CrashImg from './crashImg';

const ErrorMessage = ({ errorTrace }) => {
    return (
        <ErrorContainer>
            <CrashImg />
            <Title>We&apos;ve run into an issue.</Title>
            <SecondTitle>We apologize for the inconvenience.</SecondTitle>
            <Button variant="base">Go Back</Button>
            <ErrorText>{errorTrace}</ErrorText>
        </ErrorContainer>
    );
};

ErrorMessage.propTypes = {
    errorTrace: PropTypes.string.isRequired,
};

export default ErrorMessage;
