import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="25"
            viewBox="0 0 23 25"
            className={className}
            style={style}
        >
            <title>{title}</title>
            <g fill="none" fillRule="evenodd">
                <g fill="currentColor">
                    <path
                        d="M517.107 337.526c2.377 0 4.755-.016 7.131.007 1.003.01 1.923-.08 2.08-1.315.153-1.205-.219-2.145-1.512-2.51-1.388-.393-2.773-.801-4.163-1.192-1.586-.447-1.994-1.56-.994-2.843 2.29-2.944 2.49-6.267 1.663-9.71-.492-2.043-1.92-2.96-4.151-2.996-2.245-.036-3.743.822-4.29 2.812-.96 3.487-.73 6.855 1.583 9.849.965 1.25.654 2.329-.814 2.793-1.426.451-2.865.864-4.273 1.363-1.169.414-1.729 1.337-1.555 2.547.18 1.245 1.203 1.204 2.165 1.2 2.376-.014 4.753-.005 7.13-.005m-3.596-6.322c-2.52-3.003-3.14-6.35-2.78-9.987.396-4.005 2.412-5.997 6.238-6.025 3.893-.03 6.077 2.001 6.452 5.998.364 3.904-.075 5.596-2.644 10.032 1.635.479 3.259.907 4.85 1.432 2.067.682 3.219 3.366 2.19 5.308-.265.5-1.109.956-1.703.977-4.33.154-8.665.224-13 .252-1.752.01-3.505-.152-5.259-.232-1.198-.055-1.7-.734-1.816-1.878-.242-2.399.637-3.833 2.928-4.557 1.423-.45 2.866-.835 4.544-1.32"
                        transform="translate(-506 -315)"
                    />
                </g>
            </g>
        </svg>
    );
};

export default User;

User.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

User.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};
