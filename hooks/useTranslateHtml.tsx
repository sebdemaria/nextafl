export { useTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";

// this was an alternative to bad created tags in WTI, innerHTML in the tags should be avoided.
// We should delete all html elements used inside them, so we can render them directly with the useTranslation hook
// from i18n. This hook MUST be deleted in the future and use only the useTranslation hook inside each component to render WTI tags.
export const useTranslateHtml = () => {
    const { t } = useTranslation();

    const tr = (tag: any) => {
        return { __html: t(tag) };
    };

    return [tr];
};
