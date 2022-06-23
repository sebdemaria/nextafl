import NextLink from "next/link";
import styles from "../../styles/componentStyles/Link.module.scss";

interface LinkProps {
    href: string;

    classProp?: string;

    moreClass?: string;

    children: React.ReactNode;
}

const Link = ({ href, classProp = "", moreClass, children }: LinkProps) => {
    return (
        <NextLink href={href} role="button">
            <a className={`${styles[classProp]} ${moreClass}`}>{children}</a>
        </NextLink>
    );
};

export default Link;
