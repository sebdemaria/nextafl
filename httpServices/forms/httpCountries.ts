import { HttpClient } from "../base/httpClient";
import { HttpToken } from "../base/httpToken";

interface getCountriesProps {
    OAUTH_CLIENT_ID: string | undefined;
    OAUTH_CLIENT_SECRET: string | undefined;
    BASE_URL: string | undefined;
    ENDPOINT: string;
}

export const getCountries = async ({
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    BASE_URL,
    ENDPOINT,
}: getCountriesProps) => {
    try {
        const token = await HttpToken({
            BASE_URL,
            OAUTH_CLIENT_ID,
            OAUTH_CLIENT_SECRET,
        });

        const response = await HttpClient(BASE_URL, 2000).get(ENDPOINT, {
            headers: { authorization: `Bearer ${token}` },
        });

        return { countries: response.data, token: token };
    } catch (err) {
        return err;
    }
};
