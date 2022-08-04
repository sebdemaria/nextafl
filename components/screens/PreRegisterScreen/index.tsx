import { useEffect, useReducer } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import * as Yup from "yup";
import { Formik } from "formik";

import { postPreRegister } from "@httpServices/forms/httpPreRegister";

import PreRegisterScreenDumb from "./PreRegisterScreenDumb";

import styles from "@styles/screenStyles/PreRegister.module.scss";

interface PreRegisterProps {
    countries: {
        id: number;
        title: string;
    }[];
    token: string;
}

const PreRegisterScreen = ({ countries, token }: PreRegisterProps) => {
    const { t } = useTranslation();
    const router = useRouter();

    const handleSubmitButtonStyle = (state: any) => {
        const submitBtn = document.getElementById("submitPreRegister");

        if (state.status === "submitted") {
            submitBtn!.classList.toggle(styles.success);
        } else if (state.status === "error") {
            submitBtn!.classList.toggle(styles.error);
        } else {
            submitBtn!.classList.toggle(styles.disable);
        }
    };

    const initialState = {
        status: null,
        isLoading: false,
        message: null,
    };

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "SUBMIT":
                return {
                    status: "loading",
                    isLoading: true,
                    message: null,
                };
            case "SUBMITTED":
                return {
                    status: "submitted",
                    isLoading: false,
                    message: "submitForm_GeneralSuccessMsg",
                };
            case "ERROR":
                return {
                    status: "error",
                    isLoading: false,
                    message: "submitForm_GeneralErrorMsg",
                };
            case "RESTART":
                return initialState;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        handleSubmitButtonStyle(state);
    }, [state]);

    return (
        <Formik
            initialValues={{
                email: "",
                phone_country_id: 0,
                phone: "",
                first_name: "",
                last_name: "",
                company: "",
                position: "",
                allow_marketing_info: false,
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email(t("web-js-validations-pattern"))
                    .required(t("web-js-validations-required")),
                phone_country_id: Yup.number()
                    .notOneOf([0], t("web-js-validations-required"))
                    .required(t("web-js-validations-required")),
                phone: Yup.number()
                    .min(
                        2,
                        t("web-js-validations-minlength").replace("%s", "5")
                    )
                    .required(t("web-js-validations-required")),
                first_name: Yup.string()
                    .min(
                        2,
                        t("web-js-validations-minlength").replace("%s", "2")
                    )
                    .max(
                        255,
                        t("web-js-validations-minlength").replace("%s", "255")
                    )
                    .required(t("web-js-validations-required")),
                last_name: Yup.string()
                    .min(
                        2,
                        t("web-js-validations-minlength").replace("%s", "2")
                    )
                    .max(
                        255,
                        t("web-js-validations-minlength").replace("%s", "255")
                    )
                    .required(t("web-js-validations-required")),
                company: Yup.string()
                    .min(
                        2,
                        t("web-js-validations-minlength").replace("%s", "2")
                    )
                    .max(
                        255,
                        t("web-js-validations-minlength").replace("%s", "255")
                    )
                    .required(t("web-js-validations-required")),
                position: Yup.string()
                    .min(
                        2,
                        t("web-js-validations-minlength").replace("%s", "2")
                    )
                    .max(
                        255,
                        t("web-js-validations-minlength").replace("%s", "255")
                    )
                    .required(t("web-js-validations-required")),
            })}
            onSubmit={async (values, { setSubmitting }): Promise<any> => {
                // call http client
                try {
                    dispatch({ type: "RESTART" });
                    dispatch({ type: "SUBMIT" });
                    await postPreRegister(values, token);
                    dispatch({ type: "SUBMITTED" });
                    setTimeout(() => router.push("/"), 5000);
                } catch (e) {
                    dispatch({ type: "ERROR" });
                    return e;
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            <PreRegisterScreenDumb countries={countries} formState={state} />
        </Formik>
    );
};

export default PreRegisterScreen;
