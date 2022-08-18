/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
    i18n,
    reactStrictMode: true,
    // insert down here domains for remote image use on Next Image Elements
    images: {
        domains: ["localhost", "beta.afluenta.finance", "afluenta.finance"],
    },
    // a possible way to fix route translation
    // async rewrites() {
    //     return [
    //         {
    //             source: "/es/pre-registro",
    //             destination: "/es/pre-register",
    //             locale: false,
    //         },
    //         {
    //             source: "/en/pre-register",
    //             destination: "/en/pre-registro",
    //             locale: false,
    //         },
    //     ];
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: "/en/pre-registro",
    //             destination: "/en/pre-register",
    //             permanent: false,
    //             locale: false,
    //         },
    //     ];
    // },
};

// Analyzer for bundle packages debugging
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//     enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({ nextConfig });

module.exports = nextConfig;
