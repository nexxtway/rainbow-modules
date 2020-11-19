import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Header, ActionsContainer } from './styled';

export default function RecordSection(props) {
    const { className, style, label, children, actions } = props;
    return (
        <Container className={className} style={style}>
            <Header>
                <Label>{label}</Label>
                <ActionsContainer>{actions}</ActionsContainer>
            </Header>
            {children}
        </Container>
    );
}

RecordSection.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The label of the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The actions prop is used to place on the right a group of actions that you want to perform on the RecordSection, you are in charge of displaying these actions in the way you prefer. */
    actions: PropTypes.node,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

RecordSection.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    actions: null,
    children: null,
};
