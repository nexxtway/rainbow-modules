import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { ButtonIcon, Button } from 'react-rainbow-components';
import { isEmpty } from '@rainbow-modules/validation';
import { StyledFilterLabel } from './styled';
import messages from './messages';

const SearchButton = React.forwardRef((props, ref) => {
    const {
        assistiveText,
        className,
        disabled,
        icon,
        id,
        shaded,
        size,
        style,
        tabIndex,
        title,
        variant,
        onClick,
        isOpen,
        value,
        ariaControls,
    } = props;
    const intl = useIntl();
    const filterButton = intl.formatMessage(messages.filterButton);

    if (isOpen || !isEmpty(value)) {
        return (
            <Button
                className={className}
                disabled={disabled}
                id={id}
                onClick={onClick}
                shaded={shaded}
                size={size}
                style={style}
                tabIndex={tabIndex}
                title={title}
                variant={variant}
                ref={ref}
                ariaControls={ariaControls}
            >
                {icon}
                <StyledFilterLabel>{filterButton}</StyledFilterLabel>
            </Button>
        );
    }

    return (
        <ButtonIcon
            assistiveText={assistiveText}
            className={className}
            disabled={disabled}
            icon={icon}
            id={id}
            onClick={onClick}
            shaded={shaded}
            size={size}
            style={style}
            tabIndex={tabIndex}
            title={title}
            variant={variant}
            ref={ref}
            ariaControls={ariaControls}
        />
    );
});

SearchButton.propTypes = {
    icon: PropTypes.node,
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'border',
        'border-filled',
        'border-inverse',
        'inverse',
    ]),
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    shaded: PropTypes.bool,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    assistiveText: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
    value: PropTypes.string,
    ariaControls: PropTypes.string,
};

SearchButton.defaultProps = {
    value: undefined,
    icon: undefined,
    variant: 'base',
    size: 'medium',
    shaded: false,
    title: undefined,
    disabled: false,
    tabIndex: undefined,
    assistiveText: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    onClick: () => {},
    isOpen: false,
    ariaControls: undefined,
};

export default SearchButton;
