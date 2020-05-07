const path = require('path');

module.exports = {
    addons: [
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/\.story\.js?$/],
                    include: [path.resolve(__dirname, '../packages')],
                },
                loaderOptions: {
                    prettierConfig: { printWidth: 80, singleQuote: false },
                },
            },
        },
    ],
    webpackFinal: async (config) => {
        config.resolve = {
            alias: {
                '@rainbow-modules/app': path.join(__dirname, '../packages/app/src/index.js'),
                '@rainbow-modules/auth': path.join(__dirname, '../packages/auth/src/index.js'),
                '@rainbow-modules/icons': path.join(__dirname, '../packages/icons/src/index.js'),
            },
        };
        return config;
    },
};
