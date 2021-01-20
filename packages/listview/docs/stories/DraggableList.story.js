/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { TextFilled, List, OneFilled, Upload } from '@rainbow-modules/icons';
import { Application } from 'react-rainbow-components';
import DraggableList from '../../src/components/DraggableList';

const initialData = [
    { id: 'id1', name: 'Maxx Greene' },
    { id: 'id2', name: 'Leandro Torres' },
    { id: 'id3', name: 'Tahimi Leon' },
];

export const Basic = () => {
    const [data, setData] = useState(initialData);
    return (
        <Application className="rainbow-m-vertical_xx-large rainbow-p-horizontal_xx-large rainbow-m_auto">
            <DraggableList keyField="id" data={data} field="name" onDragEnd={setData} />
        </Application>
    );
};

const initialCustomData = [
    {
        id: 'id1',
        name: 'Text',
        description: 'Single line or multiline text area.',
        icon: <TextFilled />,
    },
    {
        id: 'id2',
        name: 'Select from List',
        description: 'Choose one or more options form a list.',
        icon: <List />,
    },
    { id: 'id3', name: 'Numeric', description: 'It accepts only numbers.', icon: <OneFilled /> },
    {
        id: 'id4',
        name: 'Upload',
        description: 'Send files via Documents and Media.',
        icon: <Upload />,
    },
];

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 12px;
`;

const Value = styled.h1`
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 14px;
    line-height: 14px;
`;
const Description = styled.h3`
    color: ${(props) => props.theme.rainbow.palette.text.header};
    font-size: 12px;
    line-height: 12px;
    margin-top: 4px;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.rainbow.palette.background.highlight};
    width: 36px;
    height: 36px;
    border-radius: 8px;
    color: ${(props) => props.theme.rainbow.palette.text.label};

    > svg {
        width: 16px;
        height: 16px;
    }
`;

const Item = ({ value, row }) => (
    <Container>
        <IconContainer>{row.icon}</IconContainer>
        <Content>
            <Value>{value}</Value>
            <Description>{row.description}</Description>
        </Content>
    </Container>
);

export const CustomComponent = () => {
    const [data, setData] = useState(initialCustomData);
    return (
        <Application className="rainbow-m-vertical_xx-large rainbow-p-horizontal_xx-large rainbow-m_auto">
            <DraggableList
                keyField="id"
                data={data}
                field="name"
                component={Item}
                onDragEnd={setData}
            />
        </Application>
    );
};

export default {
    title: 'Modules/Listview/Stories/DraggableList',
};
