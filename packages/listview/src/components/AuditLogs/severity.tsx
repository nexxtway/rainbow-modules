import React from 'react';
import { ErrorCircleFilled, InfoCircleFilled, CloseCircleFilled } from '@rainbow-modules/icons';
import { SeverityProps } from './types';
import { StyledSeverityContainer } from './styled';

const iconStyle = { width: '24px', height: '24px' };
const iconsMap: Record<string, JSX.Element> = {
    debug: <InfoCircleFilled style={iconStyle} />,
    info: <InfoCircleFilled style={iconStyle} />,
    warning: <ErrorCircleFilled style={iconStyle} />,
    error: <CloseCircleFilled style={iconStyle} />,
};

const Severity = ({ value = 'info' }: SeverityProps): JSX.Element => {
    return <StyledSeverityContainer severity={value}>{iconsMap[value]}</StyledSeverityContainer>;
};

export default Severity;
