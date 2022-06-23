// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const id = req.query.id;

    const files = {
        es: "873686",
        en: "873687",
    };

    const locale = files[id as keyof typeof files];

    const URL = `https://webtranslateit.com/api/projects/${process.env.WEBTRANSLATEIT_PUBLIC_KEY}/files/${locale}/locales/${id}`;

    const response = await axios.get(URL);

    fs.writeFile(
        `./public/locales/${id}/common.json`,
        JSON.stringify(response.data),
        (err) => {
            if (err) console.log(err);
            else {
                console.log("Locale File written successfully\n");
            }
        }
    );

    res.status(200).json(response.data);
}
