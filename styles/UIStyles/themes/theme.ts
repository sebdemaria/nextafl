import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/Button/ButtonStyles";
import { InputStyles as Input } from "./components/Input/InputStyles";
import { CardStyles as Card } from "./components/Card/CardStyles";
import { SelectStyles as Select } from "./components/Select/SelectStyles";
import { CheckboxStyles as Checkbox } from "./components/Checkbox/CheckboxStyles";
import { RadioStyles as Radio } from "./components/Radio/RadioStyles";
import { styles } from "./styles";
import { colors } from "./foundations/Colors";
import { breakpoints } from "./foundations/Breakpoints";

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
