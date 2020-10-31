import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { TilePickerContext } from '../TilePicker/context';
import isChecked from './helpers/isChecked';
import {
    StyledContainer,
    StyledInput,
    StyledLabelText,
    StyledValue,
    StyledCheckmarkContainer,
    StyledContent,
    StyledCheck,
} from './styled';

/**
 * Component to show information of dashboard
 */
export default function Tile(props) {
    const {
        label,
        value: valueProp,
        color,
        backgroundColor,
        name: nameProp,
        variant,
        id,
        className,
        style,
        selectedIcon,
    } = props;
    const context = useContext(TilePickerContext);
    const { groupName, onChange, value, multiple } = context || {};
    const inputId = useUniqueIdentifier('tile-input');
    const type = multiple ? 'checkbox' : 'radio';
    const name = groupName || nameProp;
    const checked = isChecked({ multiple, value, name: nameProp });
    const isPicker = !!context;
    const tagsElement = isPicker ? 'label' : 'div';

    return (
        <StyledContainer
            variant={variant}
            id={id}
            className={className}
            style={style}
            hasMargin={!!context}
        >
            <RenderIf isTrue={isPicker}>
                <StyledInput
                    as="input"
                    type={type}
                    id={inputId}
                    name={name}
                    checked={checked}
                    onChange={(event) => onChange(nameProp, event.target.checked)}
                    value={valueProp}
                />
            </RenderIf>
            <StyledContent
                isPicker={isPicker}
                variant={variant}
                htmlFor={inputId}
                backgroundColor={backgroundColor}
                as={tagsElement}
            >
                <RenderIf isTrue={checked}>
                    <StyledCheckmarkContainer
                        variant={variant}
                        backgroundColor={backgroundColor}
                        color={color}
                    >
                        <RenderIf isTrue={!selectedIcon}>
                            <StyledCheck
                                variant={variant}
                                backgroundColor={backgroundColor}
                                color={color}
                            />
                        </RenderIf>
                        <RenderIf isTrue={selectedIcon}>{selectedIcon}</RenderIf>
                    </StyledCheckmarkContainer>
                </RenderIf>
                <StyledLabelText variant={variant} backgroundColor={backgroundColor} color={color}>
                    {label}
                </StyledLabelText>
                <StyledValue
                    variant={variant}
                    backgroundColor={backgroundColor}
                    color={color}
                    checked={checked}
                >
                    {valueProp}
                </StyledValue>
            </StyledContent>
        </StyledContainer>
    );
}

Tile.propTypes = {
    /** Text label of the element. */
    label: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The color of the text. */
    color: PropTypes.string,
    /** The background color of the element. */
    backgroundColor: PropTypes.string,
    /** The variant changes the appearance of the Tile. Accepted variants include default and badge. */
    variant: PropTypes.oneOf(['default', 'badge']),
    /** It is a unique value that identifies the tile option. */
    name: PropTypes.string,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** The icon shown when the tile is selected. */
    selectedIcon: PropTypes.node,
};

Tile.defaultProps = {
    label: undefined,
    value: undefined,
    color: undefined,
    backgroundColor: undefined,
    variant: 'default',
    name: undefined,
    id: undefined,
    className: undefined,
    style: undefined,
    selectedIcon: undefined,
};
