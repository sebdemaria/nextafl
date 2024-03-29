const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
    stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chakra-ui/storybook-addon",
    ],
    features: {
        emotionAlias: false,
    },
    staticDirs: ["@public"],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
    webpackFinal: async (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    "@emotion/core": toPath("node_modules/@emotion/react"),
                    "emotion-theming": toPath("node_modules/@emotion/react"),
                },
            },
        };
    },
};
