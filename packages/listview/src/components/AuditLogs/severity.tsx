import React from 'react';
import { SeverityProps } from './types';
import { StyledSeverityContainer } from './styled';
import { Debug, Error, Info, Warning } from './icons';

const iconStyle = { width: '24px', height: '24px' };
const iconsMap: Record<string, JSX.Element> = {
    debug: <Debug style={iconStyle} />,
    info: <Info style={iconStyle} />,
    warning: <Warning style={iconStyle} />,
    error: <Error style={iconStyle} />,
};

const Severity = ({ value = 'info' }: SeverityProps): JSX.Element => {
    return <StyledSeverityContainer severity={value}>{iconsMap[value]}</StyledSeverityContainer>;
};

export default Severity;
