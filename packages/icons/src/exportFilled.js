import React from 'react';
import PropTypes from 'prop-types';

const ExportFilled = (props) => {
    const { className, style } = props;

    return (
        <svg className={className} style={style} width="32px" height="32px" viewBox="0 0 32 32">
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M13.2952948,10.9205829 L13.2952948,18.5299285 C13.2933907,19.634498 14.1888212,20.5299285 15.2933907,20.5299285 C15.2940257,20.5299285 15.2946607,20.5299282 15.2952939,20.5280235 L16.8095558,20.5265812 C17.9133791,20.5236239 18.807649,19.6285018 18.8095549,18.5246762 L18.8095549,10.9153306 L18.8095549,10.9153306 L28.5373306,10.9153306 C30.3042661,10.9153306 31.7825213,12.2502073 31.9786546,13.9837779 L31.9947176,14.1710006 L32,14.3582633 L32,28.5570673 C32,30.3139316 30.6574711,31.7837609 28.9139627,31.9787763 L28.7256667,31.9947477 L28.5373306,32 L3.46266944,32 C1.69573385,32 0.217478717,30.6651234 0.021345365,28.9315527 L0.00528241063,28.74433 L0,28.5570673 L0,14.3582633 C0,12.601399 1.34252889,11.1315697 3.08603735,10.9365543 L3.2743333,10.9205829 L3.46266944,10.9153306 L13.2952948,10.9205829 Z M16,0 C16.1801212,0 16.3567129,0.046203733 16.5301787,0.145897381 L16.6596982,0.230810823 L16.7613108,0.319493884 L22.054716,5.58512085 L22.150853,5.70095506 C22.4548189,6.12791959 22.4040435,6.69448496 22.0271343,7.06924575 C21.6792182,7.41517879 21.1669341,7.48480671 20.726415,7.23572301 L20.617917,7.16678772 L20.5045127,7.06924575 L17.0823368,3.66642424 L17.0810307,18.2726654 L17.0683611,18.4075916 C16.9829964,18.92422 16.5313502,19.3098189 16,19.3098189 C15.5095229,19.3098189 15.0869593,18.9812613 14.9538991,18.493468 L14.9267936,18.3683003 L14.9173638,18.2333536 L14.917269,3.66545455 L11.4654984,7.09667017 L11.3490002,7.19225925 C10.919588,7.49449257 10.3497748,7.44400655 9.97286567,7.06924575 C9.62494955,6.72331271 9.55492249,6.21394855 9.80543407,5.77594041 L9.87476454,5.66806083 L9.97286567,5.55530288 L15.2655687,0.294705441 L15.3697055,0.207568712 C15.5552118,0.0721933329 15.7748485,0 16,0 Z"
                    id="export-filled"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

ExportFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ExportFilled.defaultProps = {
    className: undefined,
    style: undefined,
};

export default ExportFilled;
