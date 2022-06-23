import Head from "next/head";
import styles from "../../../styles/templateStyles/Layout.module.scss";

import Header from "../../Header";
import Footer from "../../Footer";
export interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
