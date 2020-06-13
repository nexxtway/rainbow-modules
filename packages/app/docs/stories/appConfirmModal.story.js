import React from 'react';
import styled from 'styled-components';
import { Button, Card as RainbowCard, ButtonIcon } from 'react-rainbow-components';
import { RainbowLogo, Trash, Share } from '@rainbow-modules/icons';
import RainbowFirebaseApp from '../../src/components/App';
import ConfirmModal from '../../src/components/ConfirmModal';
import { confirmModal, showAppMessage } from '../../src/actions';

const TrashIcon = styled(Trash)`
    width: 60px;
    height: 60px;
    margin: 12px 12px 20px 0;
    color: ${(props) => props.theme.rainbow.palette.error.main};
`;

const Card = styled(RainbowCard)`
    width: 650px;
    display: flex;
    flex-direction: row;
    padding: 1.25rem 1rem;
`;

const IconContainer = styled.div`
    display: flex;
    min-width: 78px;
    min-height: 78px;
    max-width: 78px;
    max-height: 78px;
    border-radius: 39px;
    background: ${(props) => props.theme.rainbow.palette.background.highlight};
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
`;

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 1.25rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${(props) => props.theme.rainbow.palette.text.title};
`;

const Text = styled.p`
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 0.9rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    padding-top: 1rem;
`;

const CardButtonIcon = styled(ButtonIcon)`
    margin-left: 0.5rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 5rem 2rem;
`;

export const showConfirmModalExample = () => {
    const handleDeleteClick = async () => {
        const result = await confirmModal({
            icon: <TrashIcon />,
            variant: 'destructive',
            header: 'Are you sure you want delete this item?',
            question: "This item will be deleted immediately. You can't undo this action.",
            okButtonLabel: 'Delete',
        });
        // eslint-disable-next-line no-alert
        if (result)
            showAppMessage({
                message: 'Item deleted successfully.',
                variant: 'success',
            });
    };

    return (
        <RainbowFirebaseApp>
            <Container>
                <Card>
                    <IconContainer>
                        <RainbowLogo />
                    </IconContainer>
                    <div>
                        <Header>
                            <Title>rainbow-modules</Title>
                            <CardButtonIcon
                                variant="destructive"
                                icon={<Trash />}
                                onClick={handleDeleteClick}
                            />
                        </Header>
                        <Text>
                            React Rainbow is a collection of components that will reliably help you
                            build your application in a snap. Give it a hack and let us know what
                            you think.
                        </Text>
                    </div>
                </Card>
            </Container>
        </RainbowFirebaseApp>
    );
};

export const showYesNoModalExample = () => {
    const handleClick = async () => {
        const result = await confirmModal({
            header: 'Do you want to continue?',
            okButtonLabel: 'Yes',
            cancelButtonLabel: 'No',
        });
        // eslint-disable-next-line no-alert
        if (result)
            showAppMessage({
                message: 'Thanks for joining our community!',
                variant: 'success',
            });
    };
    return (
        <RainbowFirebaseApp>
            <Container>
                <Card>
                    <IconContainer>
                        <RainbowLogo />
                    </IconContainer>
                    <div>
                        <Header>
                            <Title>rainbow-modules</Title>
                            <Button label="Join Us!" variant="brand" onClick={handleClick} />
                        </Header>
                        <Text>
                            React Rainbow is a collection of components that will reliably help you
                            build your application in a snap. Give it a hack and let us know what
                            you think.
                        </Text>
                    </div>
                </Card>
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'App/Stories/Modals',
    component: ConfirmModal,
};
