import { defineMessages } from 'react-intl';

const messages = defineMessages({
    clickToCopy: {
        id: 'CopyToClipboardButton.clickToCopy',
        defaultMessage: 'Click to copy',
        description: 'Text for the tooltip that describes the action of copy to clipboard',
    },
    copied: {
        id: 'CopyToClipboardButton.copied',
        defaultMessage: 'Copied',
        description:
            'Text for the tooltip that describes that the text was copied to the clipboard',
    },
});

export default messages;
