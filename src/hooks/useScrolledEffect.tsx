import {RefObject, useEffect, useState} from "react";

export const useScrolledEffect = (ref:  RefObject<HTMLElement>, offset: number) => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    const setScrolledHandler = () => {
        if(ref.current) {
            setScrolled(window.scrollY + offset > ref.current.getBoundingClientRect().y);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", setScrolledHandler);
        return () => {
            window.removeEventListener("scroll", setScrolledHandler);
        }
    }, []);

    return scrolled;
}
