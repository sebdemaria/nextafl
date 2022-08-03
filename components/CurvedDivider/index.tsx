import { Flex } from "@chakra-ui/react";
import Image from "next/image";

import styles from "/styles/componentStyles/CurvedDivider.module.scss";

interface CurvedDividerProps {
    curvedImagePath: string;
}

const CurvedDivider = ({ curvedImagePath }: CurvedDividerProps) => {
    return (
        <Flex
            display={"inline-block"}
            className={styles.curveBottom}
            bottom={0}
            // justifyContent="center"
            left={0}
            position="absolute"
            zIndex={0}
            w={"100%"}
        >
            <Image
                priority
                alt="curveBottom"
                src={curvedImagePath}
                layout="responsive"
            />
        </Flex>
    );
};

export default CurvedDivider;
