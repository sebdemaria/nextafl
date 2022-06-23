export const InputStyles = {
    // style object for base or default style
    baseStyle: {
        field: {
            transition: "0.1s ease-in-out",
            width: "max-width",
            _focus: {
                bg: "transparent",
                boxShadow: "0px 10px 12px -15px #B8CC0C",
                borderBottom: "1.5px solid",
                borderColor: "inputFocusGreen",
            },
        },
    },
    sizes: {},
    variants: {
        bottomLine: {
            field: {
                bg: "transparent",
                border: "none",
                borderBottom: "1px solid",
                borderBottomWidth: "1px",
                borderColor: "mainGreen",
                borderRadius: "none",
                _placeholder: {
                    color: "white",
                },
            },
        },
    },
    defaultProps: {
        variant: "bottomLine",
    },
};
