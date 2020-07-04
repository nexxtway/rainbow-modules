const path = require('path');

module.exports = {
    stories: ['../packages/**/*.story.(js|mdx)'],
    addons: [
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/\.story\.(js)?$/],
                    include: [path.resolve(__dirname, '../packages')],
                },
                loaderOptions: {
                    prettierConfig: { printWidth: 80, singleQuote: false },
                },
            },
        },
        '@storybook/addon-docs',
        '@storybook/addon-viewport/register',
    ],
    webpackFinal: async (config) => {
        config.resolve = {
            alias: {
                '@rainbow-modules/app': path.join(__dirname, '../packages/app/src/index.js'),
                '@rainbow-modules/auth': path.join(__dirname, '../packages/auth/src/index.js'),
                '@rainbow-modules/icons': path.join(__dirname, '../packages/icons/src/index.js'),
                '@rainbow-modules/firebase-hooks': path.join(
                    __dirname,
                    '../packages/firebase-hooks/src/index.js',
                ),
                '@rainbow-modules/hooks': path.join(__dirname, '../packages/hooks/src/index.js'),
                '@rainbow-modules/listview': path.join(
                    __dirname,
                    '../packages/listview/src/index.js',
                ),
            },
        };
        return config;
    },
};
