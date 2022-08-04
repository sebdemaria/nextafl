const fs = require("fs");
const fetch = require("node-fetch");

(() => {
    const WEBTRANSLATEIT_PUBLIC_KEY = "proj_pub_w5OsEB8a4naaLe_HXOh_jw";

    const id = ["es", "en"];

    const files = {
        es: "873686",
        en: "873687",
    };

    id.forEach((id) => {
        const locale = files[id];

        const URL = `https://webtranslateit.com/api/projects/${WEBTRANSLATEIT_PUBLIC_KEY}/files/${locale}/locales/${id}`;

        fetch(URL)
            .then((response) => response.json())
            .then((data) =>
                fs.writeFile(
                    `./public/locales/${id}/common.json`,
                    JSON.stringify(data),
                    (err) => {
                        if (err) console.log(err);
                        else {
                            console.log("Locale File written successfully\n");
                        }
                    }
                )
            );
    });
})();
