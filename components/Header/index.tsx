import { useState } from "react";
import HeaderDumb from "./HeaderDumb";

interface NavItem {
    route: string;
    tag: string;
}
[];

interface NavItems {
    NavItems: NavItem[];
}

const Header = () => {
    const [isOpen, setisOpen] = useState<boolean>(false);

    function getNavItems(): NavItems {
        return {
            NavItems: [
                {
                    route: "/",
                    tag: "web-header-business",
                },
                {
                    route: "/",
                    tag: "web-header-technology",
                },
                {
                    route: "/",
                    tag: "web-header-mission",
                },
                {
                    route: "/",
                    tag: "web-header-educationcenter",
                },
                {
                    route: "/",
                    tag: "Whitepaper",
                },
                {
                    route: "/",
                    tag: "web-header-help",
                },
            ],
        };
    }

    const onToggle = () => {
        setisOpen((isOpen) => !isOpen);
    };

    return (
        <HeaderDumb
            getNavItems={getNavItems}
            onToggle={onToggle}
            isOpen={isOpen}
        />
    );
};

export default Header;
