import type { GetStaticProps } from "next";
import { NextPageWithLayout } from "./page";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCountries } from "../httpServices/forms/httpCountries";

import Head from "next/head";
import Layout from "../components/templates/base/Layout";
import PreRegisterScreen from "../components/screens/PreRegisterScreen";

export const getServerSideProps: GetStaticProps = async ({ locale }) => {
    const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID;
    const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
    const BASE_URL = process.env.BASE_API_URL;

    const response = await getCountries({
        OAUTH_CLIENT_ID,
        OAUTH_CLIENT_SECRET,
        BASE_URL,
        ENDPOINT: "api/get-countries",
    });

    return {
        props: {
            ...(await serverSideTranslations(locale!, ["common"])),
            response: JSON.parse(JSON.stringify(response)),
            // Will be passed to the page component as props
        },
    };
};

interface PreRegisterProps {
    response?: any;
}

const PreRegister: NextPageWithLayout = ({
    response: { countries, token },
}: PreRegisterProps) => {
    return (
        <div>
            <Head>
                <title>Afluenta Finance - Pre Registro</title>
                <meta
                    name="description"
                    content="Afluenta Finance YessCredit Pre-register."
                />
            </Head>
            <PreRegisterScreen countries={countries!} token={token} />
        </div>
    );
};

export default PreRegister;

/* 
this way we declare the structure 
for this actual page using 
a custom layout for each if needed
*/
PreRegister.getLayout = (page) => {
    return <Layout>{page}</Layout>;
};
