import React from 'react';
import PropTypes from 'prop-types';

const FileText = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="18px"
            height="22px"
            viewBox="0 0 18 22"
        >
            <title>{title}</title>
            <path
                fill="currentColor"
                d="M1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H11C11.1326 0.5 11.2598 0.552678 11.3536 0.646447L17.3536 6.64645C17.4473 6.74021 17.5 6.86739 17.5 7V19C17.5 19.663 17.2366 20.2989 16.7678 20.7678C16.2989 21.2366 15.663 21.5 15 21.5H3C2.33696 21.5 1.70107 21.2366 1.23223 20.7678C0.763392 20.2989 0.5 19.663 0.5 19V3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223ZM3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V19C1.5 19.3978 1.65804 19.7794 1.93934 20.0607C2.22064 20.342 2.60218 20.5 3 20.5H15C15.3978 20.5 15.7794 20.342 16.0607 20.0607C16.342 19.7794 16.5 19.3978 16.5 19V7.20711L10.7929 1.5H3Z"
            />
            <path
                fill="currentColor"
                d="M11 0.5C11.2761 0.5 11.5 0.723858 11.5 1V6.5H17C17.2761 6.5 17.5 6.72386 17.5 7C17.5 7.27614 17.2761 7.5 17 7.5H11C10.7239 7.5 10.5 7.27614 10.5 7V1C10.5 0.723858 10.7239 0.5 11 0.5Z"
            />
            <path
                fill="currentColor"
                d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H13C13.2761 11.5 13.5 11.7239 13.5 12C13.5 12.2761 13.2761 12.5 13 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
            />
            <path
                fill="currentColor"
                d="M4.5 16C4.5 15.7239 4.72386 15.5 5 15.5H13C13.2761 15.5 13.5 15.7239 13.5 16C13.5 16.2761 13.2761 16.5 13 16.5H5C4.72386 16.5 4.5 16.2761 4.5 16Z"
            />
            <path
                fill="currentColor"
                d="M4.5 8C4.5 7.72386 4.72386 7.5 5 7.5H7C7.27614 7.5 7.5 7.72386 7.5 8C7.5 8.27614 7.27614 8.5 7 8.5H5C4.72386 8.5 4.5 8.27614 4.5 8Z"
            />
        </svg>
    );
};

FileText.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

FileText.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default FileText;
