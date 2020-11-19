import React from 'react';
import { Provider } from '../RecordField/context';
import { StyledContainer } from './styled';

const RecordPrimaryDetails = (props) => {
    const { style, id, children, className } = props;

    const context = {
        privateParentName: 'RecordPrimaryDetails',
    };

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Provider value={context}>{children}</Provider>
        </StyledContainer>
    );
};

export default RecordPrimaryDetails;
