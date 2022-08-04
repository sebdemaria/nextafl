import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Checkbox as CheckboxChakra,
} from "@chakra-ui/react";
import { useField } from "formik";

interface CheckboxProps {
    ariaLabel?: string;

    id: string;

    name: string;

    placeholder?: string;

    classProp?: string;

    moreClass?: string;

    variant?: string;

    colorScheme?: string;

    value?: string;

    label?: string;

    helperText?: string;

    [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({
    ariaLabel = "checkbox",
    id,
    classProp = "",
    moreClass,
    placeholder = "",
    label,
    helperText,
    ...props
}: CheckboxProps) => {
    const [field, meta] = useField(props);

    return (
        <FormControl
            display={"inline-flex"}
            alignItems="center"
            justifyContent={"center"}
            flexWrap="wrap"
            mt="1em"
            isInvalid={meta.touched && meta.error ? true : false}
        >
            <CheckboxChakra
                aria-label={ariaLabel}
                className={`${classProp} ${moreClass}`}
                id={id}
                placeholder={placeholder}
                {...field}
                {...props}
            />
            <FormLabel
                htmlFor={id}
                mx="0"
                my="1em"
                fontSize={"95%"}
                textAlign={"start"}
            >
                {label}
            </FormLabel>
            {helperText && (
                <FormHelperText color={"white"}>{helperText}</FormHelperText>
            )}
            {meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
        </FormControl>
    );
};

export default Checkbox;
