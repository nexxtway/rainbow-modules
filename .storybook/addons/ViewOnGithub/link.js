import React, { useState, memo } from 'react';
import { Icons, IconButton } from '@storybook/components';

export const GithubLink = (props) => {
    const { fileName } = props;
    const href = `https://github.com/nexxtway/rainbow-modules/blob/master/${fileName}#L1`;
    return (
        <IconButton key="viewOnGithub" title="View on Github" href={href} target="blank">
            <Icons icon="github" />
        </IconButton>
    );
};
