import React from 'react';
import PropTypes from 'prop-types';

const CheckCircleFilled = (props) => {
    const { className, style, title } = props;

    return (
        <svg className={className} style={style} width="28px" height="28px" viewBox="0 0 28 28">
            <title>{title}</title>
            <g id="notifications" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M13.9994074,0 C21.7303704,0 28,6.26844444 28,13.9994074 C28,21.7303704 21.7303704,28 13.9994074,28 C6.26844444,28 0,21.7303704 0,13.9994074 C0,6.26844444 6.26844444,0 13.9994074,0 Z M20.9193878,9.36973668 C20.4201143,8.87675444 19.6134698,8.87675444 19.1144301,9.36973668 L19.1144301,9.36973668 L11.7192927,16.671459 L8.4730803,13.4661513 C7.97380685,12.9731691 7.16716232,12.9731691 6.66812266,13.4661513 C6.1688492,13.9589027 6.1688492,14.7556138 6.66812266,15.2483652 L6.66812266,15.2483652 L10.8168139,19.3447798 C11.0657494,19.5905786 11.392521,19.7142857 11.7192927,19.7142857 C12.0460644,19.7142857 12.372836,19.5905786 12.6217715,19.3447798 L12.6217715,19.3447798 L20.9193878,11.1519505 C21.4184275,10.6589683 21.4184275,9.86248807 20.9193878,9.36973668 Z"
                    id="check"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

CheckCircleFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

CheckCircleFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default CheckCircleFilled;
