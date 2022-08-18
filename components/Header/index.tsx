import { useState } from "react";
import { useScroll } from "@hooks/useScroll";
import HeaderDumb from "./HeaderDumb";
import { useRouter } from "next/router";

interface NavItem {
    route: string;
    tag: string;
}
[];

interface NavItems {
    NavItems: NavItem[];
}

const Header = () => {
    // had to do this awful thing cause i couldn't use staging vars to set the corresponding envs for every environment cause of the infra
    const env = process.env.NODE_ENV == "production";
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter();
    const { locale } = router;

    const [isOpen, setisOpen] = useState<boolean>(false);

    const [headerDark] = useScroll(isOpen);

    const getNavItems = (): NavItems => {
        return {
            NavItems: [
                {
                    route: env
                        ? locale === "en"
                            ? `${BASE_URL}en/business`
                            : `${BASE_URL}es/negocio`
                        : "/",
                    tag: "web-header-business",
                },
                {
                    route: env
                        ? locale === "en"
                            ? `${BASE_URL}en/technology`
                            : `${BASE_URL}es/tecnologia`
                        : "/",
                    tag: "web-header-technology",
                },
                {
                    route: env
                        ? locale === "en"
                            ? `${BASE_URL}en/mission`
                            : `${BASE_URL}es/mision`
                        : "/",
                    tag: "web-header-mission",
                },
                {
                    route: env
                        ? locale === "en"
                            ? `${BASE_URL}en/blog`
                            : `${BASE_URL}es/blog`
                        : "/",
                    tag: "web-header-educationcenter",
                },
                {
                    route: "/pre-register",
                    tag: "Whitepaper",
                },
                {
                    route: env
                        ? locale === "en"
                            ? `${BASE_URL}en/help`
                            : `${BASE_URL}es/ayuda`
                        : "/",
                    tag: "web-header-help",
                },
            ],
        };
    };

    const onToggle = () => {
        setisOpen((isOpen) => !isOpen);
    };

    return (
        <HeaderDumb
            getNavItems={getNavItems}
            onToggle={onToggle}
            isOpen={isOpen}
            headerDark={headerDark}
        />
    );
};

export default Header;
