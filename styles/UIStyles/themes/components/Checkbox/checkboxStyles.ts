export const CheckboxStyles = {
    baseStyle: {
        icon: {
            background: "transparent",
            display: "none",
        },
        control: {
            border: "1px",
            borderColor: "mainGreen",
            borderRadius: "0.3em",
            _disabled: {
                borderColor: "gray.300",
                bg: "gray.200",
            },
            _focus: {
                boxShadow: "none",
            },
            _checked: {
                background: "mainGreen!important",
                borderColor: "mainGreen!important",
                boxShadow: "0 0px 7px 0px #B8CC0C!important",
                transition: "0.15s ease-in-out",
            },
        },
    },
};
