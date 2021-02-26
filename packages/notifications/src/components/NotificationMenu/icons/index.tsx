/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import InfoIcon from './infoIcon';
import ErrorIcon from './errorIcon';
import SuccessIcon from './successIcon';
import WarningIcon from './warningIcon';
import { IconProps } from '../types';

const iconMap: Record<string, () => ReactElement> = {
    info: () => <InfoIcon />,
    error: () => <ErrorIcon />,
    warning: () => <WarningIcon />,
    success: () => <SuccessIcon />,
};

const VariantIcon: React.FC<{ icon: string }> = ({ icon }: { icon: string }) => {
    if (iconMap[icon]) {
        return iconMap[icon]();
    }
    return null;
};

const Icon: React.FC<IconProps> = ({ icon }: IconProps) => {
    if (typeof icon === 'string') {
        return <VariantIcon icon={icon} />;
    }
    if (icon) {
        return icon;
    }
    return null;
};

export default Icon;
