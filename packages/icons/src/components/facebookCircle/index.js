import React from 'react';
import PropTypes from 'prop-types';

const FacebookCircle = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            idth="25px"
            height="25px"
            viewBox="0 0 25 25"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M12.0502399,0.349 C5.39514492,0.349 0,5.74414492 0,12.3992399 C0,18.3680825 4.34434801,23.3112842 10.040501,24.2685012 L10.040501,14.9132463 L7.13363161,14.9132463 L7.13363161,11.5466713 L10.040501,11.5466713 L10.040501,9.06428938 C10.040501,6.18401339 11.7996873,4.61443044 14.369468,4.61443044 C15.6002372,4.61443044 16.657934,4.70614157 16.9649794,4.74653472 L16.9649794,7.75719003 L15.1826496,7.75805252 C13.7854204,7.75805252 13.5160369,8.42188017 13.5160369,9.39634695 L13.5160369,11.5449463 L16.8499811,11.5449463 L16.4151438,14.9115213 L13.5160369,14.9115213 L13.5160369,24.349 C19.4781234,23.6233608 24.100336,18.554236 24.100336,12.3957899 C24.100336,5.74414492 18.7051911,0.349 12.0502399,0.349 Z"
                    id="Path"
                    fill="#118BF0"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

FacebookCircle.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

FacebookCircle.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default FacebookCircle;
