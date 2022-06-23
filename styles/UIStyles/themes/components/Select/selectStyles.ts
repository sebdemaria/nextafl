export const SelectStyles = {
    // style object for base or default style
    baseStyle: {
        field: {
            ":focus": {
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
                color: "white",
            },
        },
    },
    defaultProps: {
        variant: "bottomLine",
    },
};
