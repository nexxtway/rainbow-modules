module.exports = function getBabelConfig(api) {
    const useESModules = api.env(['esm']);

    const presets = [
        [
            '@babel/preset-env',
            {
                modules: useESModules ? false : 'auto',
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ];
    const plugins = [
        'babel-plugin-styled-components',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
    ];

    return {
        presets,
        plugins,
        comments: false,
        sourceMaps: false,
    };
};
