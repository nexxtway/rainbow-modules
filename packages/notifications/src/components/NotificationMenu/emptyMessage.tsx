import React from 'react';
import { EmptyMessageContainer, EmptyMessageTitle, EmptyMessageDescription } from './styled';

const EmptyMessage: React.FC = () => {
    return (
        <EmptyMessageContainer>
            <EmptyMessageTitle>It&#39;s empty here</EmptyMessageTitle>
            <EmptyMessageDescription>
                Our robots did not find any notification.
            </EmptyMessageDescription>
        </EmptyMessageContainer>
    );
};

export default EmptyMessage;
