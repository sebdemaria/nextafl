import { useTranslation } from "next-i18next";
import Button from "../UI/ButtonChakra/Button";
import Input from "../UI/InputChakra/Input";
import { Form } from "formik";

interface MailingComponentProps {
    id?: string;

    classProp?: string;

    moreClass?: string;

    variant?: string;

    children: React.ReactNode;

    [x: string]: any;
}

const MailingComponentDumb = ({
    children,
    variant = "outline",
    classProp,
    moreClass,
}: MailingComponentProps) => {
    const { t } = useTranslation();

    return (
        <Form>
            <Input
                id="email"
                name="email"
                className={`${classProp} ${moreClass}`}
                display={{ base: "block", lg: "inline" }}
                h={"min-content"}
                m={"auto"}
                me={{ lg: "1em" }}
                mt={{ base: "1.5em", lg: "4em" }}
                pb={1}
                placeholder={t("web-mailingcomponent-placeholder")}
                textAlign={"center"}
                w={{ base: "90%", sm: "65%", md: "75%", lg: "45%" }}
                _placeholder={{ color: "white" }}
            />
            <Button
                ariaLabel={"mailing-submit"}
                display={{ base: "block", lg: "inline" }}
                fontSize={"80%"}
                h={"2.2em"}
                m={"auto"}
                mt={{ base: "0.8em", lg: 0 }}
                type="submit"
                variant={variant}
                w={{
                    base: "100%",
                    sm: "75%",
                    md: "90%",
                    lg: "50%",
                }}
            >
                {children}
            </Button>
        </Form>
    );
};

export default MailingComponentDumb;
