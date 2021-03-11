import { defineMessages, MessageDescriptor } from 'react-intl';

export default defineMessages<MessageDescriptor, Record<string, MessageDescriptor>>({
    unread: {
        id: 'NotificationMenu.unread',
        defaultMessage: 'Unread',
        description: 'Text shown after the number of unread notifications in title',
    },
    info: {
        id: 'NotificationMenu.infoStatus',
        defaultMessage: 'Info',
        description: 'Text shown on the status badge when status is info',
    },
    success: {
        id: 'NotificationMenu.successStatus',
        defaultMessage: 'Success',
        description: 'Text shown on the status badge when status is success',
    },
    warning: {
        id: 'NotificationMenu.warningStatus',
        defaultMessage: 'Warning',
        description: 'Text shown on the status badge when status is warning',
    },
    error: {
        id: 'NotificationMenu.errorStatus',
        defaultMessage: 'Error',
        description: 'Text shown on the status badge when status is error',
    },
    inProgress: {
        id: 'NotificationMenu.inProgressStatus',
        defaultMessage: 'In progress',
        description: 'Text shown on the status badge when status is inProgress',
    },
});
