import Image from "next/image";

import { Header as HeaderComponent } from "./Header";
import Link from "@components/Link";
import Navigation from "@components/Navigation";
import { Box, Collapse, IconButton, useBreakpoint } from "@chakra-ui/react";

import logo from "@public/assets/header/logo-afluenta-complete.png";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import styles from "@styles/componentStyles/Header.module.scss";
interface HeaderProps {
    getNavItems(): any;
    onToggle(): void;
    isOpen: boolean;
    headerDark: boolean;
}

const HeaderDumb = ({
    getNavItems,
    onToggle,
    isOpen,
    headerDark,
}: HeaderProps) => {
    const items = getNavItems();
    const { NavItems } = items;

    let breakpoint = useBreakpoint();

    return (
        <HeaderComponent headerDark={headerDark}>
            {/* Navbar Brand */}
            <Link href="/">
                <Box
                    className={styles.logoDiv}
                    ms={{ base: "5%", sm: "4em" }}
                    mt={2}
                    width={{
                        base: "10em", // xs
                        sm: "11em", // s
                        md: "13em", // md
                        xl: "15em", // lg+
                    }}
                >
                    <Image
                        src={logo}
                        alt="Afluenta_finance_logo"
                        className={styles.logo}
                        layout="responsive"
                    />
                </Box>
            </Link>

            {/* Hamburguer Button */}
            <IconButton
                display={{ base: "inline-block", lg: "none" }}
                role={"button"}
                aria-label="menu toggler"
                id="hamburger"
                onClick={onToggle}
                mt={3}
                me={{ base: "0.5em", sm: "2em" }}
                icon={
                    isOpen ? (
                        <CloseIcon w={"max-content"} h={"1.3em"} />
                    ) : (
                        <HamburgerIcon w={"auto"} h={"2em"} />
                    )
                }
                variant={"empty"}
            />

            {/* Navigation Menu */}
            {["lg", "xl", "2xl"].includes(breakpoint) ? (
                <Navigation navItems={NavItems} />
            ) : (
                <Collapse
                    className={styles.collapse}
                    in={isOpen}
                    animateOpacity
                >
                    <Navigation navItems={NavItems} />
                </Collapse>
            )}
        </HeaderComponent>
    );
};

export default HeaderDumb;
