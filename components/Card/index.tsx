import { Card as ChakraCard } from "../ChakraCustomUI/Card";

import Image from "next/image";

import styles from "../../styles/UIStyles/scss/Card.module.scss";

interface CardProps {
    variant?: string;

    imagePath?: string;

    children?: React.ReactNode;

    [x: string]: any;
}

const Card = ({ variant, imagePath = "", children, ...props }: CardProps) => {
    return (
        <ChakraCard variant={variant} className={styles.card} {...props}>
            {imagePath ?? <Image alt="cardImage" src={imagePath} />}
            {children}
        </ChakraCard>
    );
};

export default Card;
