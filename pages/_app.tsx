import type { AppProps } from "next/app";
import { NextPageWithLayout } from "./page";
import { appWithTranslation } from "next-i18next";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/UIStyles/themes/theme";

import FontStyles from "../styles/UIStyles/themes/fonts/FontStyles";

// ! this following global css line style MUST be removed
// ! and tags in WTI MUST be corrected to remove
// ! inline html. Divide them to use only
// ! css modules and t function from useTranslation Hook
import "/styles/global.css";

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // allows to turn hydration error off for debugging in react 18
    // const [showChild, setShowChild] = useState(false);

    // useEffect(() => {
    //     setShowChild(true);
    //     setShowChild(true);
    // }, []);

    // if (!showChild) {
    //     return null;
    // }

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <ChakraProvider theme={theme}>
            <FontStyles />
            {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
    );
}

// wrap app with HOC for translations
export default appWithTranslation(MyApp);
