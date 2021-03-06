import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="461px"
            height="352px"
            viewBox="0 0 461 352"
        >
            <title>{title}</title>
            <g
                id="column-customization"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <path
                    d="M284.18,288 C301.853,288 316.18,302.327 316.18,320 C316.18,337.673 301.853,352 284.18,352 L284.18,352 L128.18,352 C110.507,352 96.18,337.673 96.18,320 C96.18,302.327 110.507,288 128.18,288 L128.18,288 Z M32,288 C49.673112,288 64,302.326888 64,320 C64,337.673112 49.673112,352 32,352 C14.326888,352 0,337.673112 0,320 C0,302.326888 14.326888,288 32,288 Z M428.18,144 C445.853,144 460.18,158.327 460.18,176 C460.18,193.673 445.853,208 428.18,208 L428.18,208 L128.18,208 C110.507,208 96.18,193.673 96.18,176 C96.18,158.327 110.507,144 128.18,144 L128.18,144 Z M32,144 C49.673112,144 64,158.326888 64,176 C64,193.673112 49.673112,208 32,208 C14.326888,208 0,193.673112 0,176 C0,158.326888 14.326888,144 32,144 Z M396.18,0 C413.853,0 428.18,14.327 428.18,32 C428.18,49.673 413.853,64 396.18,64 L396.18,64 L128.18,64 C110.507,64 96.18,49.673 96.18,32 C96.18,14.327 110.507,0 128.18,0 L128.18,0 Z M32,0 C49.673112,0 64,14.326888 64,32 C64,49.673112 49.673112,64 32,64 C14.326888,64 0,49.673112 0,32 C0,14.326888 14.326888,0 32,0 Z"
                    id="list"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

List.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

List.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default List;
