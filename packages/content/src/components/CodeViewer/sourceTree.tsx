/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useIntl } from 'react-intl';
import { RainbowThemeContainer } from 'react-rainbow-components';
import Loader from './loader';
import { TreeContainer, FunctionInfo, FunctionName, StyledTree } from './styled';
import { SourceTreeProps } from './types';
import messages from './messages';

const theme = {
    rainbow: {
        palette: {
            mainBackground: '#272c35',
        },
    },
};

const SourceTree: React.FC<SourceTreeProps> = ({
    isLoading,
    name,
    data,
    icon,
    ...rest
}: SourceTreeProps) => {
    const intl = useIntl();
    if (isLoading) {
        return (
            <TreeContainer>
                <Loader message={intl.formatMessage(messages.loadingSourceTree)} />
            </TreeContainer>
        );
    }

    return (
        <TreeContainer>
            <FunctionInfo>
                {icon}
                <FunctionName>{name}</FunctionName>
            </FunctionInfo>
            <RainbowThemeContainer theme={theme}>
                <StyledTree {...rest} data={data} ariaLabel="source-tree" />
            </RainbowThemeContainer>
        </TreeContainer>
    );
};

SourceTree.defaultProps = {
    isLoading: false,
    data: [],
};

export default SourceTree;
