import React from 'react';
import { addons, types } from '@storybook/addons';

import { GithubLink } from './link';

const ADDON_ID = 'viewOnGithub';

addons.register(ADDON_ID, (api) => {
    addons.add(ADDON_ID, {
        title: 'View on Github',
        type: types.TOOLEXTRA,
        match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
        render: () => {
            const params = api.getCurrentParameter('viewOnGithub');
            if (params && params.fileName) {
                return <GithubLink fileName={params.fileName} />;
            }
            return null;
        },
    });
});
