import { Footer as FooterComponent } from "./Footer";
import LanguageSelector from "../UI/LanguageSelector";
import { Box, Text } from "@chakra-ui/react";

import Image from "next/image";
import logo from "../../public/assets/header/logo-afluenta-complete.png";
import { useTranslation } from "next-i18next";

import styles from "../../styles/componentStyles/Footer.module.scss";

const FooterDumb = () => {
    const { t } = useTranslation();

    return (
        <FooterComponent>
            <Box
                className={styles.logoDiv}
                mb={"1em"}
                width={{
                    base: "10em",
                    sm: "11em",
                    md: "13em",
                    xl: "15em",
                }}
            >
                <Image
                    alt="Afluenta_finance_logo"
                    className={styles.logo}
                    layout="responsive"
                    src={logo}
                />
            </Box>

            <hr className={styles.hr} />

            <Text
                display={"inline-block"}
                fontSize={{ base: "0.5em", md: "0.7em" }}
                pt={"1em"}
                w={{ sm: "450px" }}
            >
                {t("web-footer-infoParagraph")}
            </Text>

            <LanguageSelector top="1em" />
        </FooterComponent>
    );
};

export default FooterDumb;
