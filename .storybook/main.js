const path = require('path');
const DocBuilderPlugin = require('../scripts/DocBuilderPlugin');

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: ['../getting-started/*.story.@(js|mdx)', '../packages/**/docs/**/*.story.@(js|mdx)'],
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
        './addons/ViewOnGithub/register.js',
    ],
    webpackFinal: async (config) => {
        config.devtool = false;
        config.plugins = [
            ...config.plugins,
            // new DocBuilderPlugin({
            //     packages: [
            //         {
            //             name: 'cypress',
            //             srcPath: 'src/pageObjects',
            //             outputPath: 'docs/pageObjects',
            //             templatePath: 'template.hbs',
            //             partials: 'handlebars/partials/*.hbs',
            //         },
            //     ],
            // }),
        ];
        config.resolve.alias = {
            '@rainbow-modules/app': path.join(__dirname, '../packages/app/src/index.js'),
            '@rainbow-modules/auth': path.join(__dirname, '../packages/auth/src/index.js'),
            '@rainbow-modules/dashboard': path.join(
                __dirname,
                '../packages/dashboard/src/index.js',
            ),
            '@rainbow-modules/demos': path.join(__dirname, '../packages/demos/src/index.js'),
            '@rainbow-modules/icons': path.join(__dirname, '../packages/icons/src/index.js'),
            '@rainbow-modules/firebase-hooks': path.join(
                __dirname,
                '../packages/firebase-hooks/src/index.js',
            ),
            '@rainbow-modules/forms': path.join(__dirname, '../packages/forms/src/index.js'),
            '@rainbow-modules/hooks': path.join(__dirname, '../packages/hooks/src/index.js'),
            '@rainbow-modules/listview': path.join(__dirname, '../packages/listview/src/index.js'),
            '@rainbow-modules/storage': path.join(__dirname, '../packages/storage/src/index.js'),
            '@rainbow-modules/validation': path.join(
                __dirname,
                '../packages/validation/src/index.js',
            ),
            '@rainbow-modules/payment': path.join(__dirname, '../packages/payment/src/index.js'),
            '@rainbow-modules/search': path.join(__dirname, '../packages/search/src/index.js'),
            '@rainbow-modules/record': path.join(__dirname, '../packages/record/src/index.js'),
            '@rainbow-modules/cypress': path.join(
                __dirname,
                '../packages/cypress/src/pageObjects/index.js',
            ),
        };
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
            ],
        });
        config.node = {
            __dirname: true,
            __filename: true,
        };
        return config;
    },
    typescript: {
        check: true,
        checkOptions: {},
        reactDocgen: 'react-docgen',
    },
    reactOptions: {
        fastRefresh: true,
    },
};
