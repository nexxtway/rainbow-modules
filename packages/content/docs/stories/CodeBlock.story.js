import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import CodeBlock from '../../src/components/CodeBlock';

const code = `function createStyleObject(classNames, style) {
    return classNames.reduce((styleObject, className) => {
        return {...styleObject, ...style[className]};
    }, {});
}

function createClassNameString(classNames) {
    return classNames.join(' ');
}`;

export const CodeBlockExample = () => {
    return (
        <RainbowFirebaseApp>
            <CodeBlock label="JavaScript" language="javascript" value={code} />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Content/Stories/CodeBlock',
};
