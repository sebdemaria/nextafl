import { Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Link from "@components/Link";
import LanguageSelector from "@components/UI/LanguageSelector";

interface NavigationProps {
    navItems?: {
        route: string;
        tag: string;
    }[];
}

const Navigation = ({ navItems = [] }: NavigationProps) => {
    const { t } = useTranslation("common");

    return (
        <Stack
            mt={4}
            spacing={4}
            direction={{ base: "column", lg: "row" }}
            w={"100%"}
        >
            <Flex
                align={"center"}
                className=""
                direction={{ base: "column", lg: "row" }}
                justifyContent={{ base: "unset", lg: "center" }}
                h={{ base: "43vh", lg: "unset" }}
                py={6}
                w={"100%"}
            >
                {navItems.map((Item, index) => (
                    <Link href={Item.route ? Item.route : "#"} key={index}>
                        <Text
                            fontSize={{ lg: "85%", xl: "1em" }}
                            my={2}
                            mx={{ lg: "1em" }}
                            w={"max-content"}
                            _hover={{
                                transition: "color 200ms",
                                color: "mainGreen",
                            }}
                        >
                            {t(Item.tag)}
                        </Text>
                    </Link>
                ))}

                <LanguageSelector />
            </Flex>
        </Stack>
    );
};

export default Navigation;
