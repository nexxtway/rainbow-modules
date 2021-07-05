import React from 'react';
import PropTypes from 'prop-types';

const QuestionFilled = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="question" fill="currentColor" fillRule="nonzero">
                    <path
                        d="M12,0 C5.38293459,0 0,5.38293459 0,12 C0,18.6170654 5.38293459,24 12,24 C18.6170654,24 24,18.6170654 24,12 C24,5.38293459 18.6170654,0 12,0 Z M12,18.999939 C11.447937,18.999939 11.000061,18.552063 11.000061,18 C11.000061,17.447937 11.447937,17.000061 12,17.000061 C12.552063,17.000061 12.999939,17.447937 12.999939,18 C12.999939,18.552063 12.552063,18.999939 12,18.999939 L12,18.999939 Z M13.5829468,12.6419677 C13.2290039,12.8049316 12.999939,13.1619873 12.999939,13.5510864 L12.999939,14.000061 C12.999939,14.5519409 12.5529785,15 12,15 C11.4470215,15 11.000061,14.5519409 11.000061,14.000061 L11.000061,13.5510864 C11.000061,12.3839722 11.6859741,11.3140869 12.7450561,10.8250122 C13.7640381,10.3560791 14.499939,9.11096194 14.499939,8.49993895 C14.499939,7.12207031 13.3789673,6 12,6 C10.6210327,6 9.50006105,7.12207031 9.50006105,8.49993895 C9.50006105,9.05200195 9.05291747,9.50006105 8.49993895,9.50006105 C7.94696044,9.50006105 7.5,9.05200195 7.5,8.49993895 C7.5,6.01904297 9.51892087,3.99993895 12,3.99993895 C14.4810791,3.99993895 16.5,6.01904297 16.5,8.49993895 C16.5,9.85107422 15.3279419,11.8370362 13.5829468,12.6419677 Z"
                        id="Shape"
                    />
                </g>
            </g>
        </svg>
    );
};

QuestionFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
QuestionFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default QuestionFilled;
