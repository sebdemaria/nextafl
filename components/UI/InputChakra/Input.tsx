import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input as InputChakra,
} from "@chakra-ui/react";
import { useField } from "formik";

interface InputProps {
    ariaLabel?: string;

    id: string;

    classProp?: string;

    moreClass?: string;

    colorScheme?: string;

    variant?: string;

    placeholder?: string;

    name: string;

    label?: string;

    helperText?: string;

    errorMsg?: string;

    type?: "text" | "number" | "password" | "email" | "url";

    w?: any;

    [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
    ariaLabel = "input",
    id,
    classProp = "",
    moreClass,
    colorScheme,
    variant = "bottomLine",
    placeholder = "",
    label,
    helperText,
    type = "text",
    w = "100%",
    ...props
}: InputProps) => {
    const [field, meta] = useField(props);

    return (
        <FormControl
            display="inline-block"
            position={"relative"}
            textAlign={"center"}
            mt="1em"
            w={w}
            isInvalid={meta.touched && meta.error ? true : false}
        >
            {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
            <InputChakra
                aria-label={ariaLabel}
                className={`${classProp} ${moreClass}`}
                colorScheme={colorScheme}
                id={id}
                placeholder={placeholder}
                variant={variant}
                type={type}
                w="100%"
                {...field}
                {...props}
            />
            {helperText && (
                <FormHelperText color={"white"}>{helperText}</FormHelperText>
            )}
            {meta.touched && meta.error && (
                <FormErrorMessage
                    position={{ base: "inherit", lg: "absolute" }}
                    pb={{ base: 0, lg: "2em" }}
                    justifyContent={{ base: "center", lg: "start" }}
                >
                    {meta.error}
                </FormErrorMessage>
            )}
        </FormControl>
    );
};

export default Input;
