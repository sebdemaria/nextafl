import { HttpClient } from "../base/httpClient";

interface PreRegisterParams {
    email: string;
    phone_country_id: number | string;
    phone: number | string;
    first_name: string;
    last_name: string;
    company: string;
    position: string;
    allow_marketing_info: boolean;
}

export const postPreRegister = async (
    {
        email,
        phone_country_id,
        phone,
        first_name,
        last_name,
        company,
        position,
        allow_marketing_info = false,
    }: PreRegisterParams,
    token: string,
    BASE_URL?: string,
    ENDPOINT: string = "api/api-register"
) => {
    await HttpClient(BASE_URL, 50000)
        .post(
            ENDPOINT,
            {
                email,
                phone_country_id,
                phone,
                first_name,
                last_name,
                company,
                position,
                allow_marketing_info,
            },
            { headers: { authorization: `Bearer ${token}` } }
        )
        .then(
            function (response) {
                return response;
            },
            (error) => {
                throw error;
            }
        );
};
