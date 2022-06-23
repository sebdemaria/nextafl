export const RadioStyles = {
    baseStyle: {
        control: {
            border: "1px",
            _disabled: {
                borderColor: "gray.300",
                bg: "gray.200",
            },
            _checked: {
                background: "mainGreen!important",
                borderColor: "mainGreen!important",
                boxShadow: "0 0px 7px 0px #B8CC0C!important",
                transition: "0.15s ease-in-out",
                _before: {
                    background: "mainGreen",
                    display: "none",
                },
            },
        },
    },
};
