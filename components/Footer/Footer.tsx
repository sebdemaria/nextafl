import { Container, Box } from "@chakra-ui/react";

import styles from "@styles/componentStyles/Footer.module.scss";

interface FooterProps {
    classProp?: string;
    moreClass?: string;
    children?: React.ReactNode;
}

export const Footer = ({
    classProp = "",
    moreClass = "",
    children,
}: FooterProps) => {
    return (
        <Container
            as={"footer"}
            className={`${styles.footer} ${styles[classProp]} ${moreClass} `}
            maxW="100%"
        >
            <Box className={styles.container} px={{ base: "1em", md: "3em" }}>
                {children}
            </Box>
        </Container>
    );
};
