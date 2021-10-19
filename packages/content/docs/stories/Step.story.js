import React from 'react';
import { Application } from 'react-rainbow-components';
import Step from '../../src/components/Step';
import logo from '../../../../getting-started/assets/rainbow-modules-logo.svg';

export const SimpleStep = () => {
    return (
        <Application>
            <Step number={1} header="Step 1" description="This is the first step">
                <img src={logo} alt="rainbow-logo" />
            </Step>
            <Step
                number={2}
                header="This is the second step. It comes after the first step, and before the third one."
                description="This is the second step. It comes after the first one."
            >
                After completing the first step, you should do the second one, and that is all.
            </Step>
        </Application>
    );
};

export default {
    title: 'Modules/Content/Stories/Step',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
