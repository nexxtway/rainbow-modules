import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = (props) => {
    const { className, style, title } = props;
    return (
        <svg className={className} style={style} width="12px" height="8px" viewBox="0 0 12 8">
            <title>{title}</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M2.76079956,-1.15894619 C2.50631445,-0.824987882 2.53176296,-0.345945682 2.8371451,-0.0405635453 L6.834,3.957 L2.83715104,7.95528621 C2.50402204,8.28841521 2.50402204,8.82779469 2.8371451,9.16091774 C2.99892364,9.32308172 3.21572906,9.41095655 3.44026671,9.41095655 C3.66488678,9.41095655 3.88155759,9.32289603 4.0433463,9.16056622 L8.64362901,4.56000325 C8.97676777,4.22734119 8.97676777,3.68752721 8.64362362,3.35438306 L4.0430725,-1.24616805 C3.7100043,-1.57931569 3.17027166,-1.57931569 2.8371451,-1.24618913 L2.76079956,-1.15894619 Z"
                    id="Path"
                    fill="currentColor"
                    fillRule="nonzero"
                    transform="translate(5.740385, 3.957463) scale(1, -1) rotate(-270.000000) translate(-5.740385, -3.957463) "
                />
            </g>
        </svg>
    );
};

ArrowUp.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

ArrowUp.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default ArrowUp;
