import React from 'react';
import PropTypes from 'prop-types';

const Folder = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="22px"
            height="20px"
            viewBox="0 0 22 20"
        >
            <title>{title}</title>
            <path
                fill="currentColor"
                d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V17C1.5 17.3978 1.65804 17.7794 1.93934 18.0607C2.22064 18.342 2.60218 18.5 3 18.5H19C19.3978 18.5 19.7794 18.342 20.0607 18.0607C20.342 17.7794 20.5 17.3978 20.5 17V6C20.5 5.60218 20.342 5.22064 20.0607 4.93934C19.7794 4.65804 19.3978 4.5 19 4.5H10C9.83282 4.5 9.67671 4.41645 9.58397 4.27735L7.73241 1.5H3ZM1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H8C8.16718 0.5 8.32329 0.583551 8.41603 0.72265L10.2676 3.5H19C19.663 3.5 20.2989 3.76339 20.7678 4.23223C21.2366 4.70107 21.5 5.33696 21.5 6V17C21.5 17.663 21.2366 18.2989 20.7678 18.7678C20.2989 19.2366 19.663 19.5 19 19.5H3C2.33696 19.5 1.70107 19.2366 1.23223 18.7678C0.763392 18.2989 0.5 17.663 0.5 17V3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223Z"
            />
        </svg>
    );
};

Folder.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Folder.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Folder;
