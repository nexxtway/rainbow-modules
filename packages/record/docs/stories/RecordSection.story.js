import React from 'react';
import styled from 'styled-components';
import { Application, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { TrashFilled, PencilFilled, SettingsFilled } from '@rainbow-modules/icons';
import RecordSection from '../../src/components/RecordSection';

const Container = styled.div`
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    padding: 0 32px 12px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 20px;
    margin: 36px;
`;

const Text = styled.p`
    font-size: 14px;
    padding: 0 36px;
    color: ${(props) => props.theme.rainbow.palette.text.header};
`;

const Actions = () => {
    return (
        <ButtonGroup>
            <ButtonIcon variant="border-filled" icon={<TrashFilled />} />
            <ButtonIcon variant="border-filled" icon={<PencilFilled />} />
            <ButtonIcon variant="border-filled" icon={<SettingsFilled />} />
        </ButtonGroup>
    );
};

export const basicRecordSection = () => {
    return (
        <Application>
            <Container>
                <RecordSection label="Identity" actions={<Actions />}>
                    <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
                        similique iusto non sit consequuntur rem delectus maxime quia quam, sapiente
                        perferendis unde culpa optio. Porro optio sint impPencilFilled dolor minus
                        velit dolorum iure cupiditate eveniet commodi at quas consectetur, vero
                        blanditiis? Quo corporis iusto ad dicta doloremque, facilis doloribus ipsam.
                        Modi, dicta! Alias aspernatur inventore accusantium officiis delectus earum
                        beatae ex ad. Rerum facere, animi natus ipsum unde tempora consectetur!
                        Quisquam, cumque. Ipsam consequuntur, similique illo perferendis veniam iste
                        totam sit doloremque natus facere voluptate quos ipsum. Fuga, earum voluptas
                        architecto enim animi dignissimos facere? Fugit odio ipsam veritatis minus?
                    </Text>
                </RecordSection>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Record/Stories/',
};
