import { useTranslateHtml, useTranslation } from "@hooks/useTranslateHtml";

import Image from "next/image";
import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { Form } from "formik";
import { Input, Select, Button, Checkbox } from "@components/UI";

import error from "@public/assets/form/error.png";
import success from "@public/assets/form/success.png";

import styles from "@styles/screenStyles/PreRegister.module.scss";

interface PreRegisterDumbProps {
    countries: {
        id: number;
        title: string;
    }[];

    formState: {
        status: string;
        isLoading: boolean;
        message: string;
    };
    buttonClass: string;
}

const buttonStatus = (status: string, t: any): React.ReactNode => {
    switch (status) {
        case "error":
            return <Image src={error} alt="error" width="25px" height="28px" />;

        case "submitted":
            return (
                <Image src={success} alt="success" width="18px" height="13px" />
            );

        default:
            return t("web-forms-register_form-submit");
    }
};

const PreRegisterScreenDumb = ({
    countries,
    formState: { status, isLoading, message },
    buttonClass,
}: PreRegisterDumbProps) => {
    const [tr] = useTranslateHtml();
    const { t } = useTranslation();

    return (
        <Flex
            className={styles.firstSection}
            alignItems={"center"}
            gap={{ base: "3em", lg: "0" }}
            justifyContent={{ base: "center", md: "space-around" }}
            pb={{ base: "8em", xl: "9em" }}
            px={{ base: "1em", md: "2em" }}
            pt={{
                base: "9em",
                sm: "11em",
                lg: "11em",
                xl: "7em",
                "2xl": "14em",
            }}
            minHeight="90vh"
            wrap={"wrap"}
        >
            <Flex w={{ base: "100%", md: "45%", lg: "35%" }}>
                <Heading
                    as="h1"
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="600"
                    ps={{ md: "1em", lg: "2em" }}
                    mx={{ base: "auto", md: "initial" }}
                    textAlign={{ base: "center", md: "start" }}
                    dangerouslySetInnerHTML={tr(
                        "web-yesscredit-whitepaper_register-title"
                    )}
                />
            </Flex>

            {/* form */}
            <Flex
                justifyContent={"center"}
                me={{ lg: "2em" }}
                w={{ base: "95%", md: "45%", lg: "40%" }}
            >
                <Form noValidate={true}>
                    <Flex
                        gap={"1em"}
                        justifyContent={"space-between"}
                        wrap="wrap"
                    >
                        <Input
                            ariaLabel="email"
                            color="white"
                            id="email"
                            name="email"
                            placeholder={t("web-mailingcomponent-placeholder")}
                            type="email"
                            w={{ base: "100%" }}
                        />
                        <Select
                            ariaLabel="phone-country-select"
                            id="phone_country_id"
                            name="phone_country_id"
                            placeholder={t(
                                "web-forms-input_phone-country_label"
                            )}
                            w={{ base: "100%", sm: "47%" }}
                        >
                            {countries?.length &&
                                countries.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.title}
                                    </option>
                                ))}
                        </Select>
                        <Input
                            ariaLabel="phone-number"
                            color="white"
                            id="phone"
                            name="phone"
                            placeholder={t(
                                "web-forms-input_phone-number_label"
                            )}
                            type="number"
                            w={{ base: "100%", sm: "47%" }}
                        />
                        <Input
                            ariaLabel="first-name"
                            color="white"
                            id="first_name"
                            name="first_name"
                            placeholder={t(
                                "web-forms-register_form-placeholder-first_name"
                            )}
                            type="text"
                            w={{ base: "100%", sm: "47%" }}
                        />
                        <Input
                            ariaLabel="last-name"
                            color="white"
                            id="last_name"
                            name="last_name"
                            placeholder={t(
                                "web-forms-register_form-placeholder-last_name"
                            )}
                            type="text"
                            w={{ base: "100%", sm: "47%" }}
                        />
                        <Input
                            ariaLabel="company-name"
                            color="white"
                            id="company"
                            name="company"
                            placeholder={t(
                                "web-forms-register_form-placeholder-company"
                            )}
                            type="text"
                            w={{
                                base: "100%",
                                sm: "47%",
                                md: "100%",
                                lg: "47%",
                            }}
                        />
                        <Input
                            ariaLabel="position"
                            color="white"
                            id="position"
                            name="position"
                            placeholder={t(
                                "web-forms-register_form-placeholder-position"
                            )}
                            type="text"
                            w={{
                                base: "100%",
                                sm: "47%",
                                md: "100%",
                                lg: "47%",
                            }}
                        />
                        <Checkbox
                            ariaLabel="want_more_info"
                            id="allow_marketing_info"
                            name="allow_marketing_info"
                            label={t(
                                "web-forms-register_form-label-marketing_check"
                            )}
                            w={{ base: "10%", lg: "8%", xl: "5%" }}
                        />
                        <Button
                            id="submitPreRegister"
                            moreClass={buttonClass}
                            display="block"
                            mt={{ base: "0.5em", lg: "0" }}
                            m="auto"
                            type="submit"
                            transition={"all 0.7s ease-in-out"}
                            w="90%"
                        >
                            {isLoading ? (
                                <Spinner mt="0.1em" />
                            ) : (
                                buttonStatus(status, t)
                            )}
                        </Button>
                        {message && (
                            <Text
                                className={
                                    status == "submitted"
                                        ? styles.successMessage
                                        : styles.errorMessage
                                }
                                mx={{
                                    base: 0,
                                    sm: "2em",
                                    md: 0,
                                    lg: "2em",
                                    xl: "4em",
                                }}
                                p="0.5em 1.5em"
                                textAlign={"center"}
                                w="100%"
                            >
                                {t(message)}
                            </Text>
                        )}
                    </Flex>
                </Form>
            </Flex>
        </Flex>
    );
};

export default PreRegisterScreenDumb;
