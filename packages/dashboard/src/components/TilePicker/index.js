import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import { RenderIf } from 'react-rainbow-components';
import { useWindowResize } from 'react-rainbow-components/libs/hooks';
import { ChevronLeft, ChevronRight } from '@rainbow-modules/icons';
import { Provider } from './context';
import { StyledContainer, StyledArrowButton } from './styled';
import useKeyNav from './hooks/useKeyNav';

/**
 * TilePicker can be either radio buttons or checkboxes that are visually enhanced.
 */
export default function TilePicker(props) {
    const { style, id, children, value, multiple, className, name, onChange } = props;

    const containerRef = useRef();
    const [width, setWidth] = useState();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setWidth(containerRef.current.getClientRects()[0].width);
    }, []);

    useWindowResize(() => {
        setWidth(containerRef.current.getClientRects()[0].width);
    });

    const isCarousel = width && children.length > Math.floor(width / 200);
    const delta = isCarousel ? width && Math.floor((width - 54) / 200) : children.length;
    const isDisablePrevious = current < 1;
    const isDisableNext = current + delta >= children.length;
    const tiles = children.slice(current, current + delta);

    const { handleKeyDown } = useKeyNav({ isCarousel });

    const nameUnique = useUniqueIdentifier('tile-picker');
    const groupNameId = name || nameUnique;

    const handleChange = (optionName, isChecked) => {
        if (multiple) {
            if (Array.isArray(value)) {
                const currentValue = isChecked
                    ? [...value, optionName]
                    : value.filter((item) => item !== optionName);

                return onChange(currentValue);
            }

            const currentValue = isChecked ? [optionName] : [];
            return onChange(currentValue);
        }
        return onChange(optionName);
    };

    const context = {
        groupName: groupNameId,
        onChange: handleChange,
        value,
        multiple,
    };

    return (
        <StyledContainer
            id={id}
            className={className}
            style={style}
            ref={containerRef}
            isCarousel={isCarousel}
            onKeyDown={handleKeyDown}
        >
            <RenderIf isTrue={!!width}>
                <RenderIf isTrue={isCarousel}>
                    <StyledArrowButton
                        tabIndex="-1"
                        icon={<ChevronLeft />}
                        size="small"
                        disabled={isDisablePrevious}
                        onClick={() => setCurrent((previous) => previous - 1)}
                    />
                </RenderIf>
                <Provider value={context}>{tiles}</Provider>
                <RenderIf isTrue={isCarousel}>
                    <StyledArrowButton
                        tabIndex="-1"
                        icon={<ChevronRight />}
                        size="small"
                        disabled={isDisableNext}
                        onClick={() => setCurrent((previous) => previous + 1)}
                    />
                </RenderIf>
            </RenderIf>
        </StyledContainer>
    );
}

TilePicker.propTypes = {
    /** The name of TilePicker. */
    name: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** If true then a multiple selection is allowed */
    multiple: PropTypes.bool,
};

TilePicker.defaultProps = {
    name: null,
    value: undefined,
    id: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
    children: [],
    multiple: false,
};
