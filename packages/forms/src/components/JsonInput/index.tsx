/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useReduxForm, useUniqueIdentifier } from '@rainbow-modules/hooks';
import { RenderIf } from 'react-rainbow-components';
import JSONEditor from 'jsoneditor';
import Label from './label';
import { CodeEditor, CodeEditorContainer, JsonInputContainer, ErrorText } from './styled';
import { JsonInputProps, Value } from './types';
import debounce from './debounce';

const JsonInput: React.FC<JsonInputProps> = (props: JsonInputProps) => {
    const {
        className,
        style,
        id,
        value,
        label,
        labelAlignment,
        hideLabel,
        required,
        readOnly,
        disabled,
        error,
        onChange,
        onFocus,
        onBlur,
    }: JsonInputProps = useReduxForm(props);
    const editorRef = useRef<JSONEditor>();
    const containerRef = useRef<HTMLDivElement>(null);

    const labelId = useUniqueIdentifier('label');
    const editorId = useUniqueIdentifier('editor');
    const errorMessageId = useUniqueIdentifier('error');

    const [isFocused, setIsFocused] = useState<boolean>();

    const setEditorValue = (newValue: Value | undefined) => {
        if (editorRef.current) {
            if (!newValue) {
                editorRef.current.update({});
            } else if (typeof newValue === 'string') {
                editorRef.current.updateText(newValue);
            } else {
                editorRef.current.update(newValue);
            }
        }
    };

    useEffect(() => {
        if (!containerRef.current) return;
        editorRef.current = new JSONEditor(containerRef.current, {
            mode: disabled || readOnly ? 'view' : 'code',
            mainMenuBar: false,
            navigationBar: false,
        });
        if (disabled || readOnly) editorRef.current.expandAll();
        // eslint-disable-next-line consistent-return
        return () => {
            if (editorRef.current) {
                editorRef.current.destroy();
                editorRef.current = undefined;
            }
        };
    }, [disabled, readOnly]);

    useEffect(() => setEditorValue(value as Value), [value]);

    const fireOnChange = (format = false) => {
        if (typeof onChange === 'function' && editorRef.current) {
            try {
                const newValue = format
                    ? JSON.stringify(editorRef.current.get(), null, 2)
                    : editorRef.current.getText();
                onChange(newValue);
            } catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
            }
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
        setIsFocused(true);
        if (typeof onFocus === 'function') onFocus(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        setIsFocused(false);
        fireOnChange(true);
        if (typeof onBlur === 'function') onBlur(event);
    };

    const handleLabelClick = () => {
        if (editorRef.current) editorRef.current.focus();
    };

    const handleKeyDown = debounce(() => fireOnChange(), 1000);

    const getLabelId = () => (label ? labelId : undefined);
    const getErrorMessageId = () => (error ? errorMessageId : undefined);

    return (
        <JsonInputContainer id={id} className={className} style={style}>
            <div onClick={handleLabelClick}>
                <Label
                    id={labelId}
                    label={label}
                    required={required}
                    readOnly={readOnly}
                    labelAlignment={labelAlignment}
                    hideLabel={hideLabel}
                    inputId={editorId}
                />
            </div>
            <CodeEditorContainer>
                <CodeEditor
                    id={editorId}
                    role="textbox"
                    error={error}
                    isFocused={isFocused}
                    disabled={disabled}
                    readOnly={readOnly}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    aria-labelledby={getLabelId()}
                    aria-readonly={readOnly}
                    aria-required={required}
                    aria-multiline
                    ref={containerRef}
                />
            </CodeEditorContainer>
            <RenderIf isTrue={error}>
                <ErrorText id={getErrorMessageId()}>{error}</ErrorText>
            </RenderIf>
        </JsonInputContainer>
    );
};

JsonInput.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.any)]),
    label: PropTypes.node,
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    hideLabel: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    error: PropTypes.node,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
};

JsonInput.defaultProps = {
    className: undefined,
    style: undefined,
    id: undefined,
    value: undefined,
    label: undefined,
    labelAlignment: 'left',
    hideLabel: false,
    required: false,
    disabled: false,
    readOnly: false,
    error: undefined,
    onChange: undefined,
    onFocus: undefined,
    onBlur: undefined,
};

export default JsonInput;
