import axios from "axios";

export const HttpClient = (BASE_URL: string | undefined, timeout: number) =>
    axios.create({
        baseURL: BASE_URL,
        timeout: timeout,
    });
