import { useEffect, useState } from "react";

export function useScrollHue(multiplier = 6, initial = 200) {
    const [hue, setHue] = useState(initial);

    useEffect(() => {
        let raf = 0;

        const handleScroll = () => {
            if (raf) return;
            raf = window.requestAnimationFrame(() => {
                const newHue = (window.scrollY / multiplier) % 360;
                setHue(newHue);
                raf = 0;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (raf) window.cancelAnimationFrame(raf);
        };
    }, [multiplier]);

    return hue;
}
