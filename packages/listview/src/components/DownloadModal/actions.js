import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-rainbow-components';
import downloadFile from './helpers/downloadFile';

const Actions = ({ onRequestClose, onDownload, max, format, fileName }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownloadClick = async () => {
        setIsLoading(true);
        const data = await onDownload({ max, format });
        const newData = data || [{}];
        const slicedData = newData.slice(0, max);
        downloadFile(slicedData, format, fileName);
        setIsLoading(false);
        onRequestClose();
    };

    return (
        <div className="rainbow-flex rainbow-justify_end">
            <Button
                className="rainbow-m-right_large"
                label="Cancel"
                variant="neutral"
                onClick={onRequestClose}
            />
            <Button
                label="Download"
                variant="brand"
                onClick={handleDownloadClick}
                isLoading={isLoading}
            />
        </div>
    );
};

Actions.propTypes = {
    onRequestClose: PropTypes.func,
    onDownload: PropTypes.func,
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    format: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
};

Actions.defaultProps = {
    onRequestClose: () => {},
    onDownload: () => {},
};

export default Actions;
