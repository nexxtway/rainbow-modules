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
};