import { Button as ButtonChakra } from "@chakra-ui/react";

interface ButtonProps {
    ariaLabel?: string;

    id?: string;

    type?: "button" | "submit" | "reset";

    classProp?: string;

    moreClass?: string;

    variant?: string;

    children: React.ReactNode;

    size?: "xs" | "sm" | "md" | "lg";

    colorScheme?: string;

    background?: string;

    [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    ariaLabel = "button",
    id = "",
    type = "button",
    classProp = "",
    moreClass,
    colorScheme,
    variant,
    background,
    size,
    children,
    ...props
}: ButtonProps) => {
    return (
        <ButtonChakra
            aria-label={ariaLabel}
            bg={background}
            className={`${classProp} ${moreClass}`}
            colorScheme={colorScheme}
            id={id}
            size={size}
            type={type}
            variant={variant}
            p={0}
            {...props}
        >
            {children}
        </ButtonChakra>
    );
};

export default Button;
