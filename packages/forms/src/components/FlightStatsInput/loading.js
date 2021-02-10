import React from 'react';
import { LoadingShape } from 'react-rainbow-components';
import {
    Row,
    StyledPlanePath,
    InfoLoadingContainer,
    FlightTitleLoading,
    FlightDateLoading,
    LoadingFooter,
    OutputLoading,
    OutputLabelLoading,
    OutputValueLoading,
    OutputLabelLoadingLarge,
    OutputValueLoadingLarge,
} from './styled';

export default function Loading() {
    return (
        <>
            <Row>
                <InfoLoadingContainer>
                    <FlightTitleLoading>
                        <LoadingShape />
                    </FlightTitleLoading>
                    <FlightDateLoading>
                        <LoadingShape />
                    </FlightDateLoading>
                </InfoLoadingContainer>
                <StyledPlanePath />
                <InfoLoadingContainer>
                    <FlightTitleLoading>
                        <LoadingShape />
                    </FlightTitleLoading>
                    <FlightDateLoading>
                        <LoadingShape />
                    </FlightDateLoading>
                </InfoLoadingContainer>
            </Row>
            <LoadingFooter>
                <OutputLoading>
                    <OutputLabelLoading>
                        <LoadingShape />
                    </OutputLabelLoading>
                    <OutputValueLoading>
                        <LoadingShape />
                    </OutputValueLoading>
                </OutputLoading>
                <OutputLoading>
                    <OutputLabelLoadingLarge>
                        <LoadingShape />
                    </OutputLabelLoadingLarge>
                    <OutputValueLoadingLarge>
                        <LoadingShape />
                    </OutputValueLoadingLarge>
                </OutputLoading>
                <OutputLoading>
                    <OutputLabelLoading>
                        <LoadingShape />
                    </OutputLabelLoading>
                    <OutputValueLoading>
                        <LoadingShape />
                    </OutputValueLoading>
                </OutputLoading>
            </LoadingFooter>
        </>
    );
}
