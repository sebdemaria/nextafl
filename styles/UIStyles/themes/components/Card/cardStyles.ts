export const CardStyles = {
    // style object for base or default style
    baseStyle: {
        color: "white",
        padding: "1.5em 2em",
        position: "relative",
    },
    sizes: {},

    variants: {
        outline: {
            _before: {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "8%",
                padding: "1px",
                background: "rainbowBorder",
            },
        },
        solid: {
            backgroundColor: "black",
            borderRadius: "8%",
        },
    },

    // default values for `size` and `variant`
    defaultProps: {
        variant: "outline",
    },
};
