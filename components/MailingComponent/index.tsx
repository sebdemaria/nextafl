import { useTranslation } from "next-i18next";

import { Formik } from "formik";
import * as Yup from "yup";

import MailingComponentDumb from "./MailingComponentDumb";

interface MailingComponentProps {
    id?: string;

    classProp?: string;

    moreClass?: string;

    variant?: string;

    children: React.ReactNode;

    [x: string]: any;
}

const MailingComponent = ({
    children,
    classProp,
    variant,
}: MailingComponentProps) => {
    const { t } = useTranslation();

    return (
        <Formik
            initialValues={{
                email: "",
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email(t("web-js-validations-pattern"))
                    .required(t("web-js-validations-required")),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    // call http client
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <MailingComponentDumb classProp={classProp} variant={variant}>
                {children}
            </MailingComponentDumb>
        </Formik>
    );
};

export default MailingComponent;
