/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import {
    InfoCircleFilled,
    CloseCircleFilled,
    CheckCircleFilled,
    ErrorCircleFilled,
} from '@rainbow-modules/icons';
import { IconProps } from '../types';
import { StyledSpinner, StatusIcon } from '../styled';

const iconMap: Record<string, () => ReactElement> = {
    info: () => <StatusIcon status="info" as={InfoCircleFilled} />,
    error: () => <StatusIcon status="error" as={CloseCircleFilled} />,
    warning: () => <StatusIcon status="warning" as={ErrorCircleFilled} />,
    success: () => <StatusIcon status="success" as={CheckCircleFilled} />,
    inProgress: () => (
        <StyledSpinner
            type="arc"
            size="xx-small"
            variant="brand"
            className="rainbow-m-right_x-small"
        />
    ),
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
