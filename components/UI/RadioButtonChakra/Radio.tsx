import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Radio as RadioChakra,
} from "@chakra-ui/react";
// import styles from "../../../styles/UIStyles/scss/Input.module.scss";

interface RadioProps {
    ariaLabel?: string;

    id: string;

    name?: string;

    placeholder?: string;

    classProp?: string;

    moreClass?: string;

    variant?: string;

    colorScheme?: string;

    value?: string;

    label?: string;

    helperText?: string;

    errorMsg?: string;

    [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
export const Radio = ({
    ariaLabel = "radio",
    id,
    classProp = "",
    moreClass,
    name = "",
    placeholder = "",
    label,
    helperText,
    errorMsg,
    // value = "",
    ...props
}: RadioProps) => {
    return (
        <FormControl
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
        >
            <RadioChakra
                aria-label={ariaLabel}
                className={`${classProp} ${moreClass}`}
                id={id}
                name={name}
                placeholder={placeholder}
                // value={value}
                border="1px solid"
                borderColor="mainGreen"
                {...props}
            />
            <FormLabel htmlFor={id} ms="1em" mb="0">
                {label}
            </FormLabel>
            {helperText && (
                <FormHelperText color={"white"}>{helperText}</FormHelperText>
            )}
            {errorMsg && <FormErrorMessage>{"hola"}</FormErrorMessage>}
        </FormControl>
    );
};

export default Radio;
