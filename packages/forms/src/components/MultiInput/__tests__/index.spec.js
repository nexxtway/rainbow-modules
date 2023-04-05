import React from 'react';
import { mount, shallow } from 'enzyme';
import { Application, Button } from 'react-rainbow-components';
import MultiInput from '../index';
import { ErrorText, Label, StyledButtonIcon, StyledInput, StyledNoteInput } from '../styled';

describe('MultiInput component', () => {
    const defaultProps = {
        label: 'Test Label',
        component: undefined,
        value: undefined,
        onChange: jest.fn(),
        onFocus: jest.fn(),
        onBlur: jest.fn(),
        error: undefined,
        max: 5,
        onAdd: undefined,
    };

    it('renders without crashing', () => {
        shallow(<MultiInput {...defaultProps} />);
    });

    it('renders the label', () => {
        const wrapper = shallow(<MultiInput {...defaultProps} />);
        expect(wrapper.find(Label).text()).toEqual('Test Label');
    });

    it('adds an input when add button is clicked', () => {
        const wrapper = shallow(<MultiInput {...defaultProps} />);
        const addButton = wrapper.find(Button);
        addButton.simulate('click');
        expect(defaultProps.onChange).toHaveBeenCalledWith([
            [undefined, undefined],
            [undefined, undefined],
        ]);
    });

    it('removes an input when remove button is clicked', () => {
        const wrapper = shallow(
            <MultiInput
                {...defaultProps}
                value={[
                    [undefined, undefined],
                    [undefined, undefined],
                ]}
            />,
        );
        const removeButton = wrapper.find(StyledButtonIcon).first();
        removeButton.simulate('click');
        expect(defaultProps.onChange).toHaveBeenCalledWith([[undefined, undefined]]);
    });
    it('displays error message when error prop is a string', () => {
        const wrapper = shallow(<MultiInput {...defaultProps} error="Invalid phone number" />);
        expect(wrapper.find(ErrorText).text()).toBe('Invalid phone number');
    });
    it('displays error messages for each input when error prop is an object', () => {
        const error = {
            0: { value: 'Invalid phone number', note: 'Note error' },
            1: { value: 'Invalid phone number' },
        };
        const wrapper = shallow(
            <MultiInput
                {...defaultProps}
                value={[
                    [undefined, ''],
                    [undefined, ''],
                ]}
                error={error}
            />,
        );
        expect(wrapper.find(StyledInput).at(0).prop('error')).toBe('Invalid phone number');
        expect(wrapper.find(StyledNoteInput).at(0).prop('error')).toBe('Note error');
        expect(wrapper.find(StyledInput).at(1).prop('error')).toBe('Invalid phone number');
        expect(wrapper.find(StyledNoteInput).at(1).prop('error')).toBeUndefined();
    });
    it('should call onChange prop when input value changes', () => {
        const onChangeMock = jest.fn();
        const wrapper = mount(
            <Application>
                <MultiInput label="test label" onChange={onChangeMock} />
            </Application>,
        );
        const input = wrapper.find('input').first();
        input.simulate('change', { target: { value: 'test value' } });
        expect(onChangeMock).toHaveBeenCalledWith([['test value', undefined]]);
    });
    it('calls onChange with the updated note value when updateNote is called', () => {
        const onChangeMock = jest.fn();
        const wrapper = mount(
            <Application>
                <MultiInput value={[['', 'note']]} onChange={onChangeMock} />
            </Application>,
        );
        const noteInput = wrapper.find('input').at(1);

        noteInput.simulate('change', { target: { value: 'updated note' } });

        expect(onChangeMock).toHaveBeenCalledWith([['', 'updated note']]);
    });
});
