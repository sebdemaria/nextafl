import { useRouter } from "next/router";
import { useState } from "react";

import Link from "next/link";

import { Button, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import styles from "../../styles/UIStyles/scss/LanguageSelector.module.scss";

const LanguageSelector = ({ ...props }) => {
    const router = useRouter();
    const { locale } = router;

    const [toggleLanguage, setToggleLanguage] = useState<boolean>(false);

    const handleToggleLanguage = () => {
        console.log(toggleLanguage);
        setToggleLanguage((toggleLanguage) => !toggleLanguage);
    };

    return (
        <Flex
            float={"right"}
            justifyContent={"center"}
            wrap={"wrap"}
            w="115px"
            position={"relative"}
            ml={{ lg: "0.2em", xl: "0.8em" }}
            {...props}
        >
            <Button
                className={styles.languageSelector}
                fontSize={{ lg: "90%", xl: "1em" }}
                px="1em"
                // w={{ lg: "90%", xl: "100%" }}
                onClick={handleToggleLanguage}
                variant="outline"
                _hover={{ background: "#9c9c9c81" }}
            >
                {locale == "es" ? "Español" : "English"}
                <ChevronDownIcon textAlign={"end"} ms="0.3em" />
            </Button>

            <UnorderedList
                className={`${styles.languageOptions} ${styles.animate} ${styles.slideIn}`}
                display={toggleLanguage ? "block" : "none"}
                marginInlineStart="0"
                position={"absolute"}
                top="3.2em"
                w="90%"
            >
                <Flex wrap="wrap" justifyContent={"center"} w="100%">
                    {router.locales!.map((locale, index) => (
                        <ListItem
                            key={index}
                            className={styles.dropdownItem}
                            fontSize={{ lg: "90%", xl: "1em" }}
                            textAlign={"center"}
                            w="100%"
                        >
                            <Link href={router.asPath} locale={locale}>
                                <a>{locale == "es" ? "Español" : "English"}</a>
                            </Link>
                        </ListItem>
                    ))}
                </Flex>
            </UnorderedList>
        </Flex>
    );
};

export default LanguageSelector;
