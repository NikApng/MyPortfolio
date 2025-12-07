import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import { useCallback, useRef, type RefObject } from "react";
import TechStack from "@/components/sections/TechStack.tsx";

function App() {
    const aboutRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);
    const techRef = useRef<HTMLElement | null>(null);

    const animateScrollTo = useCallback((ref: RefObject<HTMLElement>) => {
        if (!ref.current) return;

        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const targetY = ref.current.getBoundingClientRect().top + window.scrollY - 16; // slight offset from sticky header

        if (prefersReducedMotion) {
            window.scrollTo({ top: targetY, behavior: "smooth" });
            return;
        }

        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = 950;
        const overshoot = 0.08; // gentle wave for a less linear feel
        const startTime = performance.now();

        const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);
        const wave = (t: number) => easeOutQuint(t) + Math.sin(t * Math.PI) * overshoot;

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const curved = wave(progress);
            window.scrollTo({ top: startY + distance * curved });

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, []);

    return (
        <div className="min-h-screen w-auto bg-white dark:bg-black text-black dark:text-white transition">
            <Header
                onAboutClick={() => animateScrollTo(aboutRef)}
                onProjectsClick={() => animateScrollTo(projectsRef)}
                onLanguagesClick={() => animateScrollTo(techRef)}
            />

            <main className="w-full flex flex-col items-center gap-32 mt-10 px-4">
                <About aboutRef={aboutRef} />
                <Projects projectsRef={projectsRef} />
                <TechStack techRef={techRef} />
            </main>

            <Footer />
        </div>
    );
}

export default App;
