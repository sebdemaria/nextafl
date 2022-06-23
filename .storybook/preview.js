import { ChakraProvider } from "@chakra-ui/react";
import FontStyles from "../styles/UIStyles/themes/fonts/fontStyles";
import { theme } from "../styles/UIStyles/themes/theme";

export const decorators = [
    (Story) => (
        <ChakraProvider theme={theme}>
            <FontStyles />
            <Story />
        </ChakraProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    chakra: { theme },
};
