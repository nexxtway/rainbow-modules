import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import InternalOverlay from 'react-rainbow-components/components/InternalOverlay';
import { useOutsideClick, useWindowResize } from 'react-rainbow-components/libs/hooks';
import { Option, RenderIf } from 'react-rainbow-components';
import { HeaderOption, ColoredOption } from './option';
import getBackgroundColor from './helpers/getBackgroundColor';
import getColor from './helpers/getColor';
import getNormalizedColors from './helpers/getNormalizedColors';
import useDefaultColors from './hooks/useDefaultColors';
import resolvePosition from './helpers/resolvePosition';
import { StyledContainer, StyledDropdown, StyledIndicator } from './styled';

const ColoredStatusColumn = ({ row, value, colors, textTransform, isEditable, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef();

    const defaultColors = useDefaultColors();
    const map = colors ? getNormalizedColors(colors) : defaultColors;
    const backgroundColor = getBackgroundColor(map[value.toLowerCase()]);
    const color = getColor(map[value.toLowerCase()]);
    const hasPopup = isEditable ? 'listbox' : null;

    const handleChange = (value) => {
        const { name } = value;
        onChange({
            row,
            value: name,
        });
    };

    const handleContainerClick = () => {
        setIsOpen(!isOpen);
    };

    const positionResolver = useCallback((opts) => resolvePosition(opts, 'right'), []);
    useWindowResize(() => setIsOpen(false), isOpen);
    useOutsideClick(
        containerRef,
        (event) => {
            if (event.target !== containerRef.current) {
                setIsOpen(false);
            }
        },
        isOpen,
    );

    const getOptions = () =>
        Object.keys(map).map((value) => {
            const color = getColor(map[value.toLowerCase()]);
            const backgroundColor = getBackgroundColor(map[value.toLowerCase()]);
            return (
                <Option
                    name={value}
                    label={value}
                    color={color}
                    backgroundColor={backgroundColor}
                    textTransform={textTransform}
                    component={ColoredOption}
                />
            );
        });

    return (
        <StyledContainer
            backgroundColor={backgroundColor}
            color={color}
            textTransform={textTransform}
            ref={containerRef}
            onClick={handleContainerClick}
            aria-haspopup={hasPopup}
            aria-expanded={isOpen}
            isEditable
        >
            {value}
            <RenderIf isTrue={isEditable}>
                <StyledIndicator color={color} />
                <InternalOverlay
                    isVisible={isOpen}
                    positionResolver={positionResolver}
                    triggerElementRef={() => containerRef}
                >
                    <StyledDropdown value={{ name: value }} onChange={handleChange}>
                        <HeaderOption />
                        {getOptions()}
                    </StyledDropdown>
                </InternalOverlay>
            </RenderIf>
        </StyledContainer>
    );
};

ColoredStatusColumn.propTypes = {
    /** A string that comes from the data and is displayed in the table cell  */
    value: PropTypes.string,
    /** An object with the mapping that indicates the backgroundColor and color of the component */
    colors: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                backgroundColor: PropTypes.string,
                color: PropTypes.string,
            }),
        ]),
    ),
    /** A string that indicates the format of the font capitalize | uppercase | lowercase */
    textTransform: PropTypes.string,
    /**
     * @ignore
     * An object containing the data of the row
     */
    row: PropTypes.object,
    /** A boolean that specifies whether a column is editable or not. Its default value is false.  */
    isEditable: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
};

ColoredStatusColumn.defaultProps = {
    value: undefined,
    colors: undefined,
    textTransform: 'capitalize',
    row: undefined,
    isEditable: false,
    onChange: () => {},
};

export default ColoredStatusColumn;
