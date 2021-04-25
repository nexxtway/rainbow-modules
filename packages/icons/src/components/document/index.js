import React from 'react';
import PropTypes from 'prop-types';

const Document = (props) => {
    const { className, style } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="16"
            viewBox="0 0 13 16"
            className={className}
            style={style}
        >
            <g fill="none" fillRule="evenodd">
                <g fill="currentColor" fillRule="nonzero">
                    <g>
                        <g>
                            <path
                                d="M8.738 0c.064 0 .113 0 .162.032 0 .017.016.017.016.017 0 .016.016.016.016.016l.016.016 3.08 3.08v.016l.017.017c.016.048.032.097.032.162v11.542c0 .291-.13.583-.324.778-.195.194-.47.324-.778.324H1.102c-.291 0-.583-.13-.778-.324l-.016-.016C.113 15.465 0 15.19 0 14.898V1.102C0 .811.13.52.324.324.52.13.794 0 1.102 0zm-.373.665H1.102c-.113 0-.21.048-.291.13-.082.08-.13.178-.13.291v13.812c0 .097.048.194.113.275l.017.016c.08.082.178.13.291.13h9.856c.114 0 .211-.048.292-.13.081-.08.13-.178.13-.291V3.68H9.564c-.324 0-.632-.13-.843-.34-.227-.228-.356-.52-.356-.844V.665zM6.5 10c.276 0 .5.224.5.5 0 .245-.177.45-.41.492L6.5 11h-4c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492L2.5 10h4zm3-2c.276 0 .5.224.5.5 0 .245-.177.45-.41.492L9.5 9h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492L2.5 8h7zm0-2c.276 0 .5.224.5.5 0 .245-.177.45-.41.492L9.5 7h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492L2.5 6h7zm-.454-4.833v1.346c0 .13.064.259.145.34.082.097.211.146.34.146h1.346L9.046 1.167z"
                                transform="translate(-1241 -337) translate(1225 284) translate(16 53)"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Document.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Document.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Document;
