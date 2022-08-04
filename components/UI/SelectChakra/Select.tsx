import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Select as SelectChakra,
} from "@chakra-ui/react";
import { useField } from "formik";

interface SelectProps {
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

    errorMsg?: string;

    children?: React.ReactNode;

    [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
export const Select = ({
    ariaLabel = "input",
    id,
    classProp = "",
    moreClass,
    colorScheme,
    variant = "bottomLine",
    placeholder = "",
    label,
    helperText,
    children,
    w,
    ...props
}: SelectProps) => {
    const [field, meta] = useField(props);

    return (
        <FormControl
            display={"inline-block"}
            justifyContent={"center"}
            flexWrap="wrap"
            mt="1em"
            position={"relative"}
            isInvalid={meta.touched && meta.error ? true : false}
            w={w}
        >
            {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
            <SelectChakra
                aria-label={ariaLabel}
                className={`${classProp} ${moreClass}`}
                colorScheme={colorScheme}
                id={id}
                placeholder={placeholder}
                variant={variant}
                {...field}
                {...props}
            >
                {children}
            </SelectChakra>
            {helperText && (
                <FormHelperText color={"white"}>{helperText}</FormHelperText>
            )}
            {meta.touched && meta.error && (
                <FormErrorMessage w={"100%"} position="absolute">
                    {meta.error}
                </FormErrorMessage>
            )}
        </FormControl>
    );
};

export default Select;
