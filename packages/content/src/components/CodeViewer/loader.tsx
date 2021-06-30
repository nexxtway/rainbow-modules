import React from 'react';
import { SpinnerContainer, StyledSpinner } from './styled';
import { LoaderProps } from './types';

const Loader: React.FC<LoaderProps> = ({ message }: LoaderProps) => {
    return (
        <SpinnerContainer>
            <StyledSpinner type="arc" size="large" />
            {message}
        </SpinnerContainer>
    );
};

Loader.defaultProps = {
    message: undefined,
};

export default Loader;
