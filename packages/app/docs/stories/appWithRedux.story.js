import React from 'react';
import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';
import { useDispatch, useSelector } from 'react-redux';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';
import ArrowUp from './icons/arrowUp';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 72px;
`;

const CounterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    width: 240px;
    height: 240px;
    box-shadow: 0 0 22px 0 rgba(170, 174, 178, 0.3);
    margin: 16px;
    border-radius: 4px;
`;

const Counter = styled.h1.attrs((props) => props.theme.rainbow)`
    font-size: 106px;
    color: ${(props) => props.palette.text.main};
    font-weight: 900;
    margin-top: 20px;
`;

const Description = styled.h2.attrs((props) => props.theme.rainbow)`
    font-size: 16px;
    color: ${(props) => props.palette.text.header};
    margin-top: 12px;
`;

export const increaseCounter = () => {
    const init = { count: 0 };
    const counterReducer = (state = init, action) => {
        switch (action.type) {
            case 'INCREASE':
                return {
                    count: state.count + 1,
                };
            default:
                return state;
        }
    };
    const reducers = { counterReducer };
    const Content = () => {
        const dispatch = useDispatch();
        const count = useSelector((state) => state.counterReducer.count);
        return (
            <Container>
                <CounterContainer>
                    <Counter>{count}</Counter>
                    <Description>Counter</Description>
                </CounterContainer>
                <ButtonIcon
                    onClick={() => dispatch({ type: 'INCREASE' })}
                    icon={<ArrowUp />}
                    variant="neutral"
                />
            </Container>
        );
    };

    return (
        <RainbowFirebaseApp app={app} reducers={reducers}>
            <Content />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|App/Stories',
    component: RainbowFirebaseApp,
};
