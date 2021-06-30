/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { RainbowThemeContainer } from 'react-rainbow-components';
import Loader from './loader';
import { TreeContainer, FunctionInfo, FunctionName, StyledTree } from './styled';
import { SourceTreeProps } from './types';

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
    if (isLoading) {
        return (
            <TreeContainer>
                <Loader message="Loading source tree" />
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
