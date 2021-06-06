import React from 'react';
import PropTypes from 'prop-types';

const TwitterCircle = (props) => {
    const { className, style } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={className}
            style={style}
        >
            <g fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <g>
                        <path
                            fill="#55ACEE"
                            d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
                            transform="translate(-505 -397) translate(505 397)"
                        />
                        <path
                            fill="#FFF"
                            d="M11.64 9.754l.026.415-.42-.05c-1.528-.196-2.862-.857-3.995-1.967l-.554-.55-.143.406c-.302.907-.11 1.864.52 2.508.336.356.26.407-.319.195-.201-.067-.377-.118-.394-.093-.059.06.143.83.302 1.136.218.423.663.839 1.15 1.084l.411.195-.486.009c-.47 0-.487.008-.437.186.168.55.831 1.136 1.57 1.39l.52.178-.453.271c-.672.39-1.46.61-2.25.627-.377.009-.688.042-.688.068 0 .085 1.024.56 1.62.746 1.788.55 3.911.313 5.506-.628 1.133-.669 2.267-2 2.795-3.287.286-.687.571-1.941.571-2.543 0-.39.025-.44.495-.906.277-.272.538-.568.588-.653.084-.16.076-.16-.353-.017-.713.254-.814.22-.461-.16.26-.272.57-.763.57-.908 0-.025-.125.017-.268.094-.151.084-.487.212-.739.288l-.453.144-.411-.28c-.227-.152-.546-.322-.714-.373-.428-.118-1.083-.101-1.469.034-1.049.382-1.712 1.365-1.636 2.44z"
                            transform="translate(-505 -397) translate(505 397)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

TwitterCircle.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

TwitterCircle.defaultProps = {
    className: undefined,
    style: undefined,
};

export default TwitterCircle;
