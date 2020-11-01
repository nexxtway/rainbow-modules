import React from 'react';
import PropTypes from 'prop-types';
import { LoadingShape } from 'react-rainbow-components';
import {
    LoadingContent,
    StyledRadioItem,
    StyledRadio,
    LoadingCard,
    LoadingInfo,
    LoadingFirstLine,
    LoadingSecondLine,
} from './styled';

export default function LoadingItem({ className, style, lineWidth }) {
    return (
        <StyledRadioItem className={className} style={style}>
            <LoadingContent>
                <StyledRadio />
                <LoadingCard>
                    <LoadingShape shape="rect" />
                </LoadingCard>
                <LoadingInfo>
                    <LoadingFirstLine lineWidth={lineWidth}>
                        <LoadingShape />
                    </LoadingFirstLine>
                    <LoadingSecondLine lineWidth={lineWidth}>
                        <LoadingShape />
                    </LoadingSecondLine>
                </LoadingInfo>
            </LoadingContent>
        </StyledRadioItem>
    );
}

LoadingItem.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    lineWidth: PropTypes.oneOf(['small', 'medium']),
};

LoadingItem.defaultProps = {
    className: undefined,
    style: undefined,
    lineWidth: 'medium',
};
