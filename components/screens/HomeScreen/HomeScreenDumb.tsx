import {
    useTranslateHtml,
    useTranslation,
} from "../../../hooks/useTranslateHtml";

import Image from "next/image";
import NextLink from "next/link";
import { Box, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";
import MailingComponent from "../../MailingComponent";
import Button from "../../UI/ButtonChakra/Button";
import Card from "../../Card";
import VideoPlayer from "../../VideoPlayer";

import homeMainImage from "../../../public/assets/home/image-home-mainThing.png";
import curveBottom from "../../../public/assets/home/svg-home-curvePressBottom.svg";
import CurvedDivider from "../../CurvedDivider";
import cardImg1 from "../../../public/assets/home/icon-home-HIW-1.png";
import cardImg2 from "../../../public/assets/home/icon-home-HIW-2.png";
import cardImg3 from "../../../public/assets/home/icon-home-HIW-3.png";
import cardImg4 from "../../../public/assets/home/icon-home-HIW-4.png";
import cardImg5 from "../../../public/assets/home/icon-home-HIW-5.png";
import cardImg6 from "../../../public/assets/home/icon-home-HIW-6.png";
import fourthSectionImg1 from "../../../public/assets/home/icon-home-whySecurity.png";
import fourthSectionImg2 from "../../../public/assets/home/icon-home-whyReturns.png";
import fourthSectionImg3 from "../../../public/assets/home/icon-home-whyRegional.png";
import fourthSectionImg4 from "../../../public/assets/home/icon-home-whyReliability.png";
import whitepaper from "../../../public/assets/home/icon-home-whitepaper.png";

import styles from "/styles/screenStyles/Home.module.scss";

const HomeScreenDumb = () => {
    const [tr] = useTranslateHtml();
    const { i18n, t } = useTranslation();

    const thirdSectionTags = [
        {
            title: "web-home-how-step1",
            paragraph: "web-home-how-step1Paragraph",
            img: cardImg1,
        },
        {
            title: "web-home-how-step2",
            paragraph: "web-home-how-step2Paragraph",
            img: cardImg2,
        },
        {
            title: "web-home-how-step3",
            paragraph: "web-home-how-step3Paragraph",
            img: cardImg3,
        },
        {
            title: "web-home-how-step4",
            paragraph: "web-home-how-step4Paragraph",
            img: cardImg4,
        },
        {
            title: "web-home-how-step4",
            paragraph: "web-home-how-step4Paragraph",
            img: cardImg5,
        },
        {
            title: "web-home-how-step5",
            paragraph: "web-home-how-step5Paragraph",
            img: cardImg6,
        },
    ];

    const fourthSectionTags = [
        {
            title: "web-home-why-blockchainTech",
            img: fourthSectionImg1,
        },
        {
            title: "web-home-why-USDCReturns",
            img: fourthSectionImg2,
        },
        {
            title: "web-home-why-globalRange",
            img: fourthSectionImg3,
        },
        {
            title: "web-home-why-secure",
            img: fourthSectionImg4,
        },
    ];

    const fifthSectionTags = [
        {
            title: "web-home-statistics-experience-years",
            paragraph: "web-home-statistics-experience",
        },
        {
            title: "web-home-statistics-operations",
            paragraph: "web-home-statistics-operations-countries",
        },
        {
            title: "web-home-statistics-loanApplications-numbers",
            paragraph: "web-home-statistics-loanApplications",
        },
        {
            title: "+80.000.000 USD",
            paragraph: "web-home-statistics-loansGiven",
        },
        {
            title: "+60.000",
            paragraph: "web-home-statistics-regionalClients",
        },
        {
            title: "85%",
            paragraph: "web-home-statistics-clientSatisfaction",
        },
    ];

    return (
        <>
            {/* first section */}
            <Flex
                className={styles.firstSection}
                alignItems={"center"}
                justifyContent={"center"}
                position={"relative"}
                pb={{ base: "8em", xl: "9em" }}
                ps={{ md: "2em" }}
                pt={{
                    base: "9em",
                    sm: "11em",
                    lg: "11em",
                    xl: "7em",
                }}
                wrap={"wrap"}
                gap={{ "2xl": "3em" }}
            >
                <Box
                    w={{
                        base: "90%",
                        md: "45%",
                        lg: "45%",
                        xl: "40%",
                        "2xl": "30%",
                    }}
                    zIndex={1}
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: "1.6em", md: "2em" }}
                        mx={"auto"}
                        textAlign={{ base: "center", lg: "start" }}
                        dangerouslySetInnerHTML={tr("web-home-welcome-title")}
                    />

                    <Text
                        dangerouslySetInnerHTML={tr("web-home-welcome-text")}
                        fontSize={{ base: "0.9em", lg: "0.9em" }}
                        mt={"2em"}
                        mx={{ base: "auto", lg: "inherit" }}
                        textAlign={{ base: "center", lg: "start" }}
                        w={{ base: "95%", sm: "80%", md: "90%", lg: "90%" }}
                    />

                    <NextLink href="/pre-register" passHref>
                        <Link _hover={{ textDecoration: "none" }}>
                            <Button
                                ariaLabel={"whitepaper-link"}
                                classProp={styles.whitepaper}
                                display={"flex"}
                                mx={{ base: "auto", lg: "inherit" }}
                                fontSize={"0.85em"}
                                fontWeight={"300"}
                                h={"2.3em"}
                                mt={"4em"}
                                w={{
                                    base: "80%",
                                    sm: "60%",
                                    md: "70%",
                                    lg: "350px",
                                }}
                            >
                                <Box display={"inline-block"} me={"0.5em"}>
                                    <Image
                                        alt="whitepaper"
                                        src={whitepaper}
                                        width={"15px"}
                                        height={"20px"}
                                    />
                                </Box>
                                Whitepaper
                            </Button>
                        </Link>
                    </NextLink>

                    <Box textAlign={"center"}>
                        <MailingComponent classProp={styles.mailing}>
                            {t("web-mailingcomponent-button")}
                        </MailingComponent>
                    </Box>
                </Box>

                <Box
                    display={{ base: "none", md: "block" }}
                    mb={"4em"}
                    w={{
                        md: "45%",
                        xl: "40%",
                        "2xl": "35%",
                    }}
                >
                    <Image
                        priority
                        alt="mainHome"
                        className={styles.mainImage}
                        src={homeMainImage}
                        layout="responsive"
                    />
                </Box>

                {/* curved image divider */}
                <CurvedDivider curvedImagePath={curveBottom} />
            </Flex>

            {/* second section */}
            <Flex
                alignItems={"center"}
                className={styles.secondSection}
                gap={{ md: "2em", xl: 0 }}
                justifyContent={{ base: "center", md: "space-around" }}
                py={{
                    base: "4em",
                    sm: "5em",
                    lg: "7em",
                    "2xl": "6em",
                }}
                px={{ md: "2em" }}
                wrap={{ base: "wrap", lg: "nowrap" }}
            >
                <Flex
                    justifyContent={{ base: "center" }}
                    height="auto"
                    w={{ base: "100%", lg: "80%", xl: "45%" }}
                >
                    <VideoPlayer
                        language={i18n.language}
                        classProp={styles.video}
                    />
                </Flex>

                <Flex
                    alignItems={"center"}
                    justifyContent={{ base: "center", lg: "space-between" }}
                    gap={{ base: "1em", md: "2em" }}
                    mt={{ base: "2em", md: "3em", lg: "0" }}
                    textAlign={{ base: "center", lg: "start" }}
                    w={{ base: "90%", lg: "60%", xl: "35%" }}
                    wrap="wrap"
                >
                    <Text
                        as="h2"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        lineHeight={"1.2em"}
                        w={"100%"}
                        dangerouslySetInnerHTML={tr("web-home-video-title")}
                    />

                    <Text
                        fontSize={{ base: "md", md: "lg", xl: "xl" }}
                        w={"100%"}
                        dangerouslySetInnerHTML={tr("web-home-video-text")}
                    />
                </Flex>
            </Flex>

            {/* third section */}
            <Flex
                alignItems={"center"}
                className={styles.thirdSection}
                gap={{ base: "2em", md: "4em" }}
                justifyContent={{ base: "center" }}
                py={{
                    base: "3em",
                }}
                px={{ md: "2em" }}
                wrap={{ base: "wrap" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight={"600"}
                    maxW={"90%"}
                    textAlign={"center"}
                    dangerouslySetInnerHTML={tr("web-home-how-title")}
                />
                <Flex
                    px="2em"
                    gap={"2em"}
                    justifyContent={"center"}
                    wrap={"wrap"}
                    w={"100%"}
                >
                    {thirdSectionTags.map((card, index) => (
                        <Card
                            key={index}
                            textAlign={{
                                base: "center",
                                lg: "start",
                                "2xl": "center",
                            }}
                            py={{ "2xl": "2em" }}
                            w={{ base: "90%", md: "30%" }}
                        >
                            <Box
                                mb={{ base: "1em", "2xl": "2em" }}
                                mx={{ base: "auto", lg: "0", "2xl": "auto" }}
                                w={{
                                    base: "30%",
                                    sm: "15%",
                                    md: "35%",
                                    lg: "25%",
                                    xl: "15%",
                                    "2xl": "15%",
                                }}
                            >
                                <Image
                                    alt="card1"
                                    src={card.img}
                                    height={"70%"}
                                    layout="responsive"
                                    width={"80%"}
                                />
                            </Box>
                            <Text
                                as={"h3"}
                                fontSize={{ md: "sm", lg: "1em", xl: "lg" }}
                                fontWeight={"600"}
                                dangerouslySetInnerHTML={tr(card.title)}
                            />
                            <Text
                                fontSize={{ md: "80%", lg: "0.8em", xl: "md" }}
                                mt="0.2em"
                                dangerouslySetInnerHTML={tr(card.paragraph)}
                            />
                        </Card>
                    ))}
                </Flex>
            </Flex>

            {/* fourth section */}
            <Flex
                alignItems={"center"}
                className={styles.fourthSection}
                gap={{ base: "2em", md: "3em", lg: "4em" }}
                justifyContent={{ base: "center" }}
                py={{
                    base: "3em",
                }}
                px={{ md: "2em" }}
                wrap={{ base: "wrap" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight={"600"}
                    maxW={"90%"}
                    textAlign={"center"}
                    dangerouslySetInnerHTML={tr("web-home-why-title")}
                />
                <Flex
                    px="2em"
                    gap={"2em"}
                    justifyContent={"center"}
                    wrap={"wrap"}
                    w={"100%"}
                >
                    {fourthSectionTags.map((card, index) => (
                        <Card
                            key={index}
                            variant="solid"
                            textAlign={{
                                base: "center",
                            }}
                            py={{ xl: "3em" }}
                            w={{ base: "90%", sm: "40%", md: "20%" }}
                        >
                            <Box
                                mb={{ base: "1em", "2xl": "2em" }}
                                mx={{ base: "auto" }}
                                w={{
                                    base: "20%",
                                    sm: "30%",
                                    md: "35%",
                                    lg: "25%",
                                    xl: "15%",
                                    "2xl": "15%",
                                }}
                            >
                                <Image
                                    alt="card1"
                                    src={card.img}
                                    layout="responsive"
                                />
                            </Box>
                            <Text
                                as={"h3"}
                                fontSize={{ md: "xs", lg: "1em", xl: "lg" }}
                                fontWeight={"600"}
                                dangerouslySetInnerHTML={tr(card.title)}
                            />
                        </Card>
                    ))}
                </Flex>
            </Flex>

            {/* fifth section */}
            <Flex
                alignItems={"center"}
                className={styles.fifthSection}
                gap={{ base: "2em" }}
                justifyContent={{ base: "center" }}
                py={{
                    base: "3em",
                }}
                textAlign="center"
                wrap={{ base: "wrap" }}
            >
                <Text
                    dangerouslySetInnerHTML={tr("web-home-statistics-title")}
                    as="h2"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    lineHeight="1em"
                    fontWeight={"600"}
                    textAlign={"center"}
                    w={{ base: "70%", md: "100%" }}
                />

                <HStack
                    display={"flex"}
                    flexWrap={"wrap"}
                    justifyContent="center"
                    spacing={{ base: 0, md: "24px", xl: 0 }}
                >
                    {fifthSectionTags.map((item, index) => (
                        <Flex
                            key={index}
                            alignItems="center"
                            className={styles.statistics}
                            wrap={"wrap"}
                            justifyContent="center"
                            py={{ base: "2em", lg: "1em" }}
                            textAlign="center"
                            w={{ base: "50%", md: "28%", xl: "15%" }}
                        >
                            <Text
                                dangerouslySetInnerHTML={tr(item.title)}
                                className={styles.statsText}
                                color="mainGreen"
                                fontSize={{ base: "lg" }}
                                fontWeight={"700"}
                                w="100%"
                            />
                            <Text
                                dangerouslySetInnerHTML={tr(item.paragraph)}
                                className={styles.statsText}
                                textAlign={"center"}
                                w={"80%"}
                            />
                        </Flex>
                    ))}
                </HStack>
            </Flex>
        </>
    );
};

export default HomeScreenDumb;
