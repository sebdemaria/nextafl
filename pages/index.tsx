import type { GetStaticProps } from "next";

import Head from "next/head";
import Layout from "@components/templates/base/Layout";
import HomeScreen from "@components/screens/HomeScreen";

import { NextPageWithLayout } from "./page";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ["common"])),
            // Will be passed to the page component as props
        },
    };
};

const Home: NextPageWithLayout = () => {
    return (
        <div>
            <Head>
                <title>Afluenta Finance - Home</title>
                <meta
                    name="description"
                    content="Afluenta Finance provides a Crypto Currency loan application and investment service."
                />
            </Head>
            <HomeScreen />
        </div>
    );
};

export default Home;

/* 
this way we declare the structure 
for this actual page using 
a custom layout for each if needed
*/
Home.getLayout = (page) => {
    return <Layout>{page}</Layout>;
};
