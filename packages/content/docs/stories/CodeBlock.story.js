import React from 'react';
import { Application } from 'react-rainbow-components';
import CodeBlock from '../../src/components/CodeBlock';

const code = `function createStyleObject(classNames, style) {
    return classNames.reduce((styleObject, className) => {
        return {...styleObject, ...style[className]};
    }, {});
}

function createClassNameString(classNames) {
    return classNames.join(' ');
}

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

function createChildren(style, useInlineStyles) {
    let childrenCount = 0;
    return children => {
        childrenCount += 1;
        return children.map((child, i) => createElement({
            node: child,
            style,
            useInlineStyles,
        }));
    }
}

function createElement({ node, style, useInlineStyles, key }) {
    const { properties, type, tagName, value } = node;
    if (type === "text") {
        return value;
    } else if (tagName) {
        const TagName = tagName;
        const childrenCreator = createChildren(style, useInlineStyles);
        const props = (
        useInlineStyles
            ? { style: createStyleObject(properties.className, style) }
            : { className: createClassNameString(properties.className) }
        );
        const children = childrenCreator(node.children);
        return <TagName key={key} {...props}>{children}</TagName>;
    }
}`;

export const CodeBlockExample = () => {
    return (
        <Application>
            <CodeBlock label="JavaScript" language="javascript" value={code} />
        </Application>
    );
};

export default {
    title: 'Modules/Content/Stories/CodeBlock',
};
