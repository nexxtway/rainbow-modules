import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';
import Actions from './actions';
import resolveValueBetweenRange from './helpers/resolveValueBetweenRange';
import { Title, Description, Card, SubTitle, StyledInput } from './styled';

const DownloadModal = (props) => {
    const {
        id,
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
        const finalValue = resolveValueBetweenRange(event.target.value, maxEntries);
        setMaximumEntries(finalValue);
    };

    return (
        <Modal
            id={id}
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
                    max={maxEntries}
                    min={1}
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
    /** An id for the outer element. */
    id: PropTypes.string,
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
    id: undefined,
    title: 'Download',
    description:
        'Entries matching the number specified in “Maximum entries” will be downloaded. If you need more than 10,000 entries, consider exporting.',
    className: undefined,
    style: undefined,
    fileName: 'data',
    maxEntries: 500,
    isOpen: false,
    onRequestClose: () => {},
    onDownload: async () => {},
};

export default DownloadModal;
