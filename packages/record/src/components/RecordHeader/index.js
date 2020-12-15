import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import { CubeFilled } from '@rainbow-modules/icons';
import {
    Container,
    Label,
    Header,
    ActionsContainer,
    Details,
    Description,
    IconContainer,
    RowContainer,
    TagsContainer,
    Body,
    LabelLoadingShape,
    DescriptionLoadingShape,
} from './styled';

export default function RecordHeader(props) {
    const {
        className,
        style,
        label,
        description,
        icon,
        tags,
        children,
        actions,
        isLoading,
    } = props;
    return (
        <Container className={className} style={style}>
            <Header>
                <Details>
                    <RowContainer>
                        <RenderIf isTrue={isLoading}>
                            <LabelLoadingShape />
                        </RenderIf>
                        <RenderIf isTrue={!isLoading}>
                            <RenderIf isTrue={icon}>
                                <IconContainer>{icon}</IconContainer>
                            </RenderIf>
                            <Label>{label}</Label>
                        </RenderIf>
                    </RowContainer>
                    <RowContainer>
                        <RenderIf isTrue={isLoading}>
                            <DescriptionLoadingShape />
                        </RenderIf>
                        <RenderIf isTrue={!isLoading}>
                            <Description>{description}</Description>
                            <TagsContainer>{tags}</TagsContainer>
                        </RenderIf>
                    </RowContainer>
                </Details>

                <ActionsContainer>{actions}</ActionsContainer>
            </Header>
            <Body>{children}</Body>
        </Container>
    );
}

RecordHeader.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The entity name that appears in the header of the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The main text that appears in the header of the component. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The actions prop is used to place on the right a group of actions that you want to perform on the RecordHeader, you are in charge of displaying these actions in the way you prefer. */
    actions: PropTypes.node,
    /** The icon that appears in the header of the component. If not passed a fallback icon will be shown. */
    icon: PropTypes.node,
    /** The tags prop is used to show badges on the header of the component. */
    tags: PropTypes.node,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** Specifies whether data is being loaded. The default is false. */
    isLoading: PropTypes.bool,
};

RecordHeader.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    description: undefined,
    actions: null,
    tags: null,
    children: null,
    icon: <CubeFilled />,
    isLoading: false,
};
