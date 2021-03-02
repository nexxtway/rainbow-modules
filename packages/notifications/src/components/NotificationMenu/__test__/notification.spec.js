import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import Notification from '../notification';
import { CreatedAt, Description, StatusBadge, Title } from '../styled';
import SuccessIcon from '../icons/successIcon';
import WarningIcon from '../icons/warningIcon';
import ErrorIcon from '../icons/errorIcon';

describe('<Notification />', () => {
    it('should render LoadingShape when isLoading is true', () => {
        const wrapper = mount(
            <Application>
                <Notification isLoading />
            </Application>,
        );
        expect(wrapper.find('LoadingShape').exists()).toBe(true);
    });

    it('should render the passed icon', () => {
        const icon = <div data-test="icon">Icon</div>;
        const wrapper = mount(
            <Application>
                <Notification icon={icon} />
            </Application>,
        );
        expect(wrapper.find('[data-test="icon"]').exists()).toBe(true);
    });

    it('should render the passed title', () => {
        const title = <div data-test="title">Title</div>;
        const wrapper = mount(
            <Application>
                <Notification title={title} />
            </Application>,
        );
        const titleComponent = wrapper.find(Title);
        expect(titleComponent.find('[data-test="title"]').exists()).toBe(true);
    });

    it('should render the relative time when createdAt is valid', () => {
        const createdAt = Date.now();
        const wrapper = mount(
            <Application>
                <Notification createdAt={createdAt} />
            </Application>,
        );
        expect(wrapper.find(CreatedAt).exists()).toBe(true);
    });

    it('should not render the relative time when createdAt is not passed', () => {
        const wrapper = mount(
            <Application>
                <Notification title="Test" />
            </Application>,
        );
        const createdAtComponent = wrapper.find(CreatedAt);
        expect(createdAtComponent.find(CreatedAt).exists()).toBe(false);
    });

    it('should render the passed description', () => {
        const description = <div data-test="description">Description</div>;
        const wrapper = mount(
            <Application>
                <Notification description={description} />
            </Application>,
        );
        const descriptionComponent = wrapper.find(Description);
        expect(descriptionComponent.find('[data-test="description"]').exists()).toBe(true);
    });

    it('should render the passed status', () => {
        const status = <div data-test="status">Status</div>;
        const wrapper = mount(
            <Application>
                <Notification status={status} />
            </Application>,
        );
        expect(wrapper.find('[data-test="status"]').exists()).toBe(true);
    });

    it('should render the correct status badge', () => {
        const status = ['inProgress', 'success', 'warning', 'error'];
        const expectedIcon = [null, SuccessIcon, WarningIcon, ErrorIcon];
        const expectedText = ['In progress', 'Success', 'Warning', 'Error'];

        status.forEach((value, index) => {
            const wrapper = mount(
                <Application>
                    <Notification status={value} />
                </Application>,
            );
            const badge = wrapper.find(StatusBadge);
            if (expectedIcon[index]) expect(badge.find(expectedIcon[index]).exists()).toBe(true);
            expect(badge.text()).toBe(expectedText[index]);
        });
    });

    it('should fire onClick when clicked', () => {
        const onClickFn = jest.fn();
        const wrapper = mount(
            <Application>
                <Notification
                    id="id"
                    title="Title"
                    description="Description"
                    status="success"
                    onClick={onClickFn}
                />
            </Application>,
        );
        wrapper.find(Title).simulate('click');
        expect(onClickFn).toHaveBeenCalledWith({
            id: 'id',
            title: 'Title',
            description: 'Description',
            status: 'success',
            createdAt: undefined,
            icon: undefined,
            unread: false,
        });
    });
});
