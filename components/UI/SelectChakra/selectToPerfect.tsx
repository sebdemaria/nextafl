interface SelectProps {
    children: React.ReactNode;
}

export const ChakraReactSelect = ({
    children,
}: // styles = {},
// components = {},
// theme = () => ({}),
// size = "md",
// colorScheme = "gray",
// isDisabled,
// isInvalid,
// ...props
SelectProps) => {
    children;
    // const chakraTheme = useTheme();

    // // Combine the props passed into the component with the props
    // // that can be set on a surrounding form control to get
    // // the values of isDisabled and isInvalid
    // const inputProps = useFormControl({ isDisabled, isInvalid });

    // // The chakra theme styles for TagCloseButton when focused
    // const closeButtonFocus =
    //     chakraTheme.components.Tag.baseStyle.closeButton._focus;
    // const multiValueRemoveFocusStyle = {
    //     background: closeButtonFocus.bg,
    //     boxShadow: chakraTheme.shadows[closeButtonFocus.boxShadow],
    // };

    // // The chakra UI global placeholder color
    // // https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/styles.ts#L13
    // // const placeholderColor = useColorModeValue(
    // //     chakraTheme.colors.gray[400],
    // //     chakraTheme.colors.whiteAlpha[400]
    // // );

    // // Ensure that the size used is one of the options, either `sm`, `md`, or `lg`
    // let realSize = size;
    // const sizeOptions = ["sm", "md", "lg"];
    // if (!sizeOptions.includes(size)) {
    //     realSize = "md";
    // }

    // const select = cloneElement(children, {
    //     components: {
    //         ...chakraComponents,
    //         ...components,
    //     },
    //     styles: {
    //         ...chakraStyles,
    //         ...styles,
    //     },
    //     theme: (baseTheme) => {
    //         const propTheme = theme(baseTheme);

    //         return {
    //             ...baseTheme,
    //             ...propTheme,
    //             colors: {
    //                 ...baseTheme.colors,
    //                 neutral50: placeholderColor, // placeholder text color
    //                 neutral40: placeholderColor, // noOptionsMessage color
    //                 ...propTheme.colors,
    //             },
    //             spacing: {
    //                 ...baseTheme.spacing,
    //                 ...propTheme.spacing,
    //             },
    //         };
    //     },
    //     colorScheme,
    //     size: realSize,
    //     multiValueRemoveFocusStyle,
    //     // isDisabled and isInvalid can be set on the component
    //     // or on a surrounding form control
    //     isDisabled: inputProps.disabled,
    //     isInvalid: !!inputProps["aria-invalid"],
    //     ...props,
    // });

    // return select;
};
