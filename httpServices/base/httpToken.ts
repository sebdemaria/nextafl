import { HttpClient } from "./httpClient";

interface TokenParams {
    BASE_URL: string | undefined;
    OAUTH_CLIENT_ID: string | undefined;
    OAUTH_CLIENT_SECRET: string | undefined;
}

export const HttpToken = async ({
    BASE_URL,
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
}: TokenParams) => {
    const { data } = await HttpClient(BASE_URL, 10000).post("oauth/token", {
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        grant_type: "client_credentials",
    });

    return data.access_token;
};
