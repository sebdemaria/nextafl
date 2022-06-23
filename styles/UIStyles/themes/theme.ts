import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/Button/buttonStyles";
import { InputStyles as Input } from "./components/Input/inputStyles";
import { CardStyles as Card } from "./components/Card/cardStyles";
import { SelectStyles as Select } from "./components/Select/selectStyles";
import { CheckboxStyles as Checkbox } from "./components/Checkbox/checkboxStyles";
import { RadioStyles as Radio } from "./components/Radio/radioStyles";
import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { breakpoints } from "./foundations/breakpoints";

export const theme = extendTheme({
    styles,
    colors,
    fonts: {
        heading: `'Raleway', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
    breakpoints,
    components: {
        Button,
        Input,
        Card,
        Select,
        Checkbox,
        Radio,
    },
});
