import React, { useState, useEffect, useRef, useCallback, createContext } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import { RenderIf } from 'react-rainbow-components';
import { useWindowResize } from 'react-rainbow-components/libs/hooks';
import { ChevronLeft, ChevronRight } from '@rainbow-modules/icons';
import {
    StyledContainer,
    StylesScrollable,
    StyledUniversalPicker,
    StyledArrowButton,
} from './styled';
import useRegisterChildren from './hooks/useRegisterChildren';

const TilePickerContext = createContext();
/**
 * TilePicker can be either radio buttons or checkboxes that are visually enhanced.
 */
export default function TilePicker(props) {
    const { style, id, children, value, multiple, className, name, onChange } = props;

    const containerRef = useRef();
    const scrollableRef = useRef();
    const [width, setWidth] = useState();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setWidth(containerRef.current.getClientRects()[0].width);
    }, []);

    useWindowResize(() => {
        setWidth(containerRef.current.getClientRects()[0].width);
    });

    const isCarousel = width && children.length > Math.floor(width / 200);
    const delta = isCarousel ? width && Math.floor((width - 32) / 200) : children.length;
    const isDisablePrevious = current < 1;
    const isDisableNext = current + delta >= children.length;

    const nameUnique = useUniqueIdentifier('tile-picker');
    const groupName = name || nameUnique;

    const { activeChildren, registerChild, unregisterChild } = useRegisterChildren({
        containerRef,
    });

    useEffect(() => {
        if (width) {
            scrollableRef.current.scrollLeft = current * 200;
        }
    }, [current, width]);

    const setFocused = useCallback(
        (childRef) => {
            const activeIndex = activeChildren.current.findIndex((child) => child.ref === childRef);
            if (activeIndex > -1) {
                if (activeIndex < current) {
                    setCurrent(activeIndex);
                }
                if (activeIndex >= current + delta) {
                    setCurrent(activeIndex - delta + 1);
                }
            }
        },
        [activeChildren, current, delta],
    );

    const context = { registerChild, unregisterChild, setFocused };

    return (
        <StyledContainer id={id} className={className} style={style} ref={containerRef}>
            <RenderIf isTrue={!!width}>
                <TilePickerContext.Provider value={context}>
                    <RenderIf isTrue={isCarousel}>
                        <StyledArrowButton
                            tabIndex="-1"
                            icon={<ChevronLeft />}
                            size="xx-small"
                            disabled={isDisablePrevious}
                            onClick={() => setCurrent((previous) => previous - 1)}
                        />
                    </RenderIf>
                    <StylesScrollable ref={scrollableRef} style={{ margin: '0px' }}>
                        <StyledUniversalPicker
                            value={value}
                            onChange={onChange}
                            name={groupName}
                            multiple={multiple}
                            isCarousel={isCarousel}
                        >
                            {children}
                        </StyledUniversalPicker>
                    </StylesScrollable>
                    <RenderIf isTrue={isCarousel}>
                        <StyledArrowButton
                            tabIndex="-1"
                            icon={<ChevronRight />}
                            size="xx-small"
                            disabled={isDisableNext}
                            onClick={() => setCurrent((previous) => previous + 1)}
                        />
                    </RenderIf>
                </TilePickerContext.Provider>
            </RenderIf>
        </StyledContainer>
    );
}

TilePicker.context = TilePickerContext;

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
