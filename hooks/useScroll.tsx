import { useCallback, useEffect, useState } from "react";

export const useScroll = (isOpen: boolean) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const [headerDark, setHeaderDark] = useState(false);

    const handleScroll = () => {
        // calculate scroll percentage
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;

        const position = Math.round(
            (scrollTop / (docHeight - winHeight)) * 100
        );

        setScrollPosition(position);
    };

    const handleHeaderOpen = useCallback(() => {
        handleScroll();

        handleHeaderBGClick(scrollPosition, isOpen);
    }, [scrollPosition, isOpen]);

    const handleHeaderScroll = useCallback(() => {
        handleScroll();

        handleHeaderBGScroll(scrollPosition, isOpen);
    }, [scrollPosition, isOpen]);

    const handleHeaderBGClick = (scrollPosition: number, isOpen: boolean) => {
        switch (isOpen) {
            case false:
                setHeaderDark(true);
                break;

            default:
                if (scrollPosition === 0) {
                    setHeaderDark(false);
                } else {
                    setHeaderDark(true);
                }
                break;
        }
    };

    const handleHeaderBGScroll = (scrollPosition: number, isOpen: boolean) => {
        if (scrollPosition < 2 && !isOpen) {
            setHeaderDark(false);
        } else if (scrollPosition > 2 && !isOpen) {
            setHeaderDark(true);
        }
    };

    useEffect(() => {
        const hamburger = document.getElementById("hamburger");

        window.addEventListener("scroll", handleHeaderScroll);
        hamburger?.addEventListener("click", handleHeaderOpen);

        return () => {
            window.removeEventListener("scroll", handleHeaderScroll);
            hamburger!.removeEventListener("click", handleHeaderOpen);
        };
    }, [handleHeaderOpen, handleHeaderScroll]);

    return [headerDark];
};
