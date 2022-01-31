import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';
import downloadFile from './helpers/downloadFile';
import { Title, Description, Card, SubTitle, StyledInput } from './styled';

// eslint-disable-next-line react/prop-types
const Actions = ({ onRequestClose, onDownload, max, format, fileName }) => {
    const handleDownloadClick = async () => {
        const data = await onDownload(max, format);
        downloadFile(data, format, fileName);
    };

    return (
        <div className="rainbow-flex rainbow-justify_end">
            <Button
                className="rainbow-m-right_large"
                label="Cancel"
                variant="neutral"
                onClick={onRequestClose}
            />
            <Button label="Download" variant="brand" onClick={handleDownloadClick} />
        </div>
    );
};

const DownloadModal = (props) => {
    const {
        maxEntries,
        onDownload,
        isOpen,
        onRequestClose,
        fileName,
        title,
        description,
        style,
        className,
    } = props;
    const [fileFormat, setFileFormat] = useState('json');
    const [maximumEntries, setMaximumEntries] = useState(maxEntries);

    const handleMaximumEntriesChange = (event) => {
        setMaximumEntries(event.target.value);
    };

    return (
        <Modal
            className={className}
            style={style}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            footer={
                <Actions
                    onRequestClose={onRequestClose}
                    onDownload={onDownload}
                    max={maximumEntries}
                    format={fileFormat}
                    fileName={fileName}
                />
            }
        >
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Card>
                <SubTitle>Maximum entries</SubTitle>
                <StyledInput
                    type="number"
                    value={maximumEntries}
                    onChange={handleMaximumEntriesChange}
                />
            </Card>
            <Card>
                <SubTitle>Select format</SubTitle>
                <ButtonGroupPicker value={fileFormat} onChange={setFileFormat} size="medium">
                    <ButtonOption label="JSON" name="json" />
                    <ButtonOption label="CSV" name="csv" />
                </ButtonGroupPicker>
            </Card>
        </Modal>
    );
};

DownloadModal.propTypes = {
    /** The title at the top of the DownloadModal component. */
    title: PropTypes.string,
    /** The description in the DownloadModal component. */
    description: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The name of the file to be downloaded. */
    fileName: PropTypes.string,
    /** The maximum number of entries to be downloaded. */
    maxEntries: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Controls whether the Modal is opened or not. If true, the modal is open. */
    isOpen: PropTypes.bool,
    /** The action triggered when the component request to close
     *  (e.g click close button, press esc key or click outside the modal). */
    onRequestClose: PropTypes.func,
    /** The action triggered when the component request to download.
     * This is asynchronous function that must return the data to download in an array of objects format.
     */
    onDownload: PropTypes.func,
};

DownloadModal.defaultProps = {
    title: 'Download',
    description:
        'The entries matching will be downloaded. If you need over 10,000 entries consider exporting.',
    className: undefined,
    style: undefined,
    fileName: 'data',
    maxEntries: '500',
    isOpen: false,
    onRequestClose: () => {},
    onDownload: async () => {},
};

export default DownloadModal;
