/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Application, Button } from 'react-rainbow-components';
import { useScrollingIntent } from '../../src';

const StyledBox = styled.div`
    display: flex;
    position: fixed;
    padding: 1rem 0.75rem 1rem 1rem;
    border-radius: 1rem;
    background-color: white;
    left: calc(50vw - 175px);
    bottom: 1rem;
    width: 350px;
    height: 250px;
    transform: all linear 300ms;
    opacity: 0;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);
    ${(props) =>
        props.isVisible &&
        `
        opacity: 1;
        `};
    & > div {
        overflow-y: auto;
    }
`;

const FloatingBox = React.forwardRef((props, ref) => {
    const { isOpen } = props;
    return createPortal(
        <StyledBox ref={ref} isVisible={isOpen}>
            <div>
                <p>
                    Deserunt anim magna do sit id incididunt. Labore sunt aute eiusmod incididunt
                    consequat veniam nostrud ea veniam consequat eu ad. Dolor ea id ad nisi. Mollit
                    in occaecat officia deserunt commodo cillum fugiat consequat. Sint ex mollit
                    aliquip proident labore tempor irure cupidatat.
                </p>
                <p>
                    Ex ullamco ut ipsum ullamco irure dolor. Velit nisi dolor culpa reprehenderit
                    consequat nulla voluptate ut incididunt tempor veniam consectetur consectetur.
                    Consectetur nostrud officia deserunt dolor. Veniam est enim mollit culpa
                    consectetur excepteur est est. Lorem proident ea cillum fugiat deserunt irure.
                    Est do exercitation nisi anim. Elit minim anim non et non amet.
                </p>
            </div>
        </StyledBox>,
        document.body,
    );
});

export default function WrapperUserHasScrolled() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const label = isOpen ? 'Hide help' : 'Show help';

    useScrollingIntent({ callback: () => setIsOpen(false), isListening: isOpen });

    return (
        <Application>
            <Button shaded variant="brand" label={label} onClick={toggle} />
            <FloatingBox isOpen={isOpen} />
        </Application>
    );
}
