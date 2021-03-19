/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import Label from 'react-rainbow-components/components/Input/label';
import useReduxForm from 'react-rainbow-components/libs/hooks/useReduxForm';
import { RenderIf } from 'react-rainbow-components';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';
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

    const fireOnChange = () => {
        if (typeof onChange === 'function' && editorRef.current) {
            try {
                onChange(editorRef.current.get());
            } catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
                onChange(editorRef.current.getText());
            }
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
        setIsFocused(true);
        if (typeof onFocus === 'function') onFocus(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        setIsFocused(false);
        fireOnChange();
        if (typeof onBlur === 'function') onBlur(event);
    };

    const handleLabelClick = () => {
        if (editorRef.current) editorRef.current.focus();
    };

    const handleKeyDown = debounce(fireOnChange, 1000);

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

export default JsonInput;
