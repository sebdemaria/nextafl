export const ButtonStyles = {
    // style object for base or default style
    baseStyle: {
        background: "mainGreen",
        borderRadius: "50rem",
        color: "black",
        // for some reason or chakra bug i need both px and paddingX defined for the property to be applied
        px: "2.5rem",
        paddingX: "2.5rem",
        _focus: {
            outline: "none",
            boxShadow: "none",
        },
        _hover: {
            background: "hoverGreen",
        },
    },

    // styles for different sizes ("sm", "md", "lg")
    sizes: {},

    // styles for different visual variants ("outline", "solid")
    variants: {
        outline: {
            bg: "transparent",
            border: "1px solid",
            borderColor: "#B8CC0C",
            color: "white",
            _hover: {
                bg: "mainGreen",
                color: "black",
            },
        },
        empty: {
            bg: "transparent",
            border: "none",
            color: "white",
            _hover: {
                bg: "transparent",
                color: "gray.400",
            },
        },
    },

    // default values for `size` and `variant`
    defaultProps: {
        variant: "filled",
    },
};
