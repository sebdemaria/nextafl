/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
    i18n,
    reactStrictMode: true,
    // insert down here domains for remote image use on Next Image Elements
    images: {
        domains: ["localhost"],
    },
    // async rewrites() {
    //     return {
    //         beforeFiles: [
    //             {
    //                 source: "/es/ayuda",
    //                 destination: "/help",
    //                 locale: false,
    //             },
    //             {
    //                 source: "/en/help",
    //                 destination: "/en/help",
    //                 locale: false,
    //             },
    //         ],
    //     };
    // },
};

// Analyzer for bundle packages debugging
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//     enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({ nextConfig });

module.exports = nextConfig;
