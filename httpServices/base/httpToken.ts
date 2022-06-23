import { HttpClient } from "./httpClient";

interface TokenParams {
    OAUTH_CLIENT_ID: string | undefined;
    OAUTH_CLIENT_SECRET: string | undefined;
}

export const HttpToken = async ({
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
}: TokenParams) => {
    const { data } = await HttpClient(
        "http://afluenta_crypto.afl/",
        10000
    ).post("oauth/token", {
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        grant_type: "client_credentials",
    });

    return data.access_token;
};
