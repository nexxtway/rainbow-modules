import React, { useRef, useState } from 'react';
import { RenderIf } from 'react-rainbow-components';
import { Edit, Lock } from '@rainbow-modules/icons';
import useReduxForm from 'react-rainbow-components/libs/hooks/useReduxForm';
import get from 'lodash/get';
import UniversalFormOverlay from '../UniversalFormOverlay';
import OverlayField from './overlayField';
import { EditableContainer, StyledButtonIcon } from './styled';

const EditableCell = (props) => {
    const {
        name,
        row,
        value,
        index,
        onChange,
        isEditable,
        columnComponent: Component,
        columnValidate: validate,
        type,
        dirty,
    } = useReduxForm(props);
    const containerRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const RenderedComponent = Component || (() => null);

    const closeForm = () => {
        setIsOpen(false);
    };

    const handleSubmit = (values) => {
        closeForm();
        onChange(get(values, name));
    };

    return (
        <>
            <EditableContainer ref={containerRef} isDirty={dirty}>
                <RenderIf isTrue={Component}>
                    <RenderedComponent value={value} row={row} index={index} dirty={dirty} />
                </RenderIf>
                <RenderIf isTrue={!Component}>{value}</RenderIf>
                <RenderIf isTrue={isEditable}>
                    <StyledButtonIcon icon={<Edit />} onClick={() => setIsOpen(true)} />
                </RenderIf>
                <RenderIf isTrue={!isEditable}>
                    <StyledButtonIcon icon={<Lock />} disabled />
                </RenderIf>
            </EditableContainer>
            <UniversalFormOverlay
                triggerElementRef={containerRef}
                isOpen={isOpen}
                fields={OverlayField}
                onRequestClose={closeForm}
                onSumbit={handleSubmit}
                name={name}
                value={value}
                validate={validate}
                type={type}
            />
        </>
    );
};

export default EditableCell;
