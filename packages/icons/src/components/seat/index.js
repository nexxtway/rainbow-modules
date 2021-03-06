import React from 'react';
import PropTypes from 'prop-types';

const Seat = (props) => {
    const { className, style, title } = props;
    return (
        <svg width="17px" height="11px" viewBox="0 0 17 11" className={className} style={style}>
            <title>{title}</title>
            <g id="MVP" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="dispatch/assign-driver"
                    transform="translate(-142.000000, -1377.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-6" transform="translate(71.000000, 1276.000000)">
                        <g id="Group-5" transform="translate(23.000000, 58.000000)">
                            <path
                                d="M61.7160822,52.0716027 L61.7160822,50.1765482 L62.3504575,50.1765482 C63.1536034,50.1765482 63.8070135,49.5231382 63.8070135,48.7199923 C63.8070135,47.9168463 63.1536034,47.2634681 62.3504575,47.2634681 L60.3044914,47.2634681 L59.6313475,44.172084 C59.548567,43.7919291 59.3227239,43.4667812 58.9953833,43.2564774 C58.6680427,43.0461735 58.2784181,42.9760404 57.8982633,43.0587574 C57.1135166,43.2296253 56.6140687,44.007095 56.7849366,44.7918417 L57.9574013,50.1765482 L59.7390099,50.1765482 L59.7390099,52.0716027 L53.4293858,52.0716027 L53.4293858,50.1765482 L54.0637611,50.1765482 C54.866907,50.1765482 55.5203171,49.5231382 55.5203171,48.7199923 C55.5203171,47.9168463 54.866907,47.2634681 54.0637611,47.2634681 L52.0177951,47.2634681 L51.3446511,44.172084 C51.1737515,43.3873055 50.3962183,42.8878259 49.6115351,43.0587574 C48.8267884,43.2296253 48.3273724,44.007095 48.4982403,44.7918417 L49.6707049,50.1765482 L51.4523135,50.1765482 L51.4523135,52.0716027 L48,52.0716027 L48,53.0249293 L64.2701078,53.0249293 L64.2701078,52.0716027 L61.7160822,52.0716027 Z"
                                id="Path"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Seat.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
Seat.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Seat;
