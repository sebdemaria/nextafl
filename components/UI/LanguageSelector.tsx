import { useRouter } from "next/router";

import Link from "next/link";

interface LanguageSelectorProps {
    classname?: string;
}

const LanguageSelector = ({ classname = "" }: LanguageSelectorProps) => {
    const router = useRouter();

    return (
        <ul className={classname}>
            {router.locales!.map((locale, index) => (
                <li key={index}>
                    <Link href={router.asPath} locale={locale}>
                        <a>{locale == "es" ? "Español" : "English"}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default LanguageSelector;
