import { Container, Flex } from "@chakra-ui/react";
import styles from "@styles/componentStyles/Header.module.scss";

interface HeaderProps {
    headerDark?: boolean;
    moreClass?: string;
    children?: React.ReactNode;
}

export const Header = ({
    headerDark = false,
    moreClass = "",
    children,
}: HeaderProps) => {
    return (
        <header
            className={`${styles.header} ${
                headerDark ? styles.headerDark : styles.headerTransparent
            } ${moreClass}`}
        >
            <Container maxW="80em">
                <Flex
                    className={styles.container}
                    wrap={{ base: "wrap", lg: "inherit" }}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    mb={{ base: 3, xl: -1 }}
                    mt={{ base: 2, xl: -1 }}
                >
                    {children}
                </Flex>
            </Container>
        </header>
    );
};
