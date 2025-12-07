import React, { useCallback, useMemo, useRef, useState } from "react";
import { data } from "@/data/tech.ts";
import { useTranslation } from "react-i18next";
import { useScrollHue } from "@/hooks/useScrollHue.ts";
import FloatingOrbs from "@/components/ui/FloatingOrbs.tsx";

function TechStack({ techRef }) {
    const { t } = useTranslation();
    const hue = useScrollHue(6, 240);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const [active, setActive] = useState<string | null>(null);
    const [lines, setLines] = useState<
        { id: string; x1: number; y1: number; x2: number; y2: number }[]
    >([]);

    const connections = useMemo<Record<string, string[]>>(
        () => ({
            React: ["TypeScript", "RTK", "Zustand", "Tailwind", "VITE", "Next.js"],
            TypeScript: ["React", "VITE", "Zustand", "Next.js"],
            JavaScript: ["React", "Vue"],
            Tailwind: ["React", "Next.js", "VITE"],
            Vue: ["TypeScript", "VITE"],
            RTK: ["React", "TypeScript"],
            Zustand: ["React", "TypeScript"],
            VITE: ["React", "TypeScript", "Tailwind"],
            html: ["css", "scss"],
            css: ["scss", "Bootstrap"],
            scss: ["Bootstrap"],
            Bootstrap: ["css", "scss"],
            "Next.js": ["React", "TypeScript", "Tailwind"],
        }),
        [],
    );

    const computeLines = useCallback(
        (title: string) => {
            const sourceEl = cardRefs.current[title];
            const targets = connections[title] || [];
            if (!sourceEl || !containerRef.current) {
                setLines([]);
                return;
            }
            const containerRect = containerRef.current.getBoundingClientRect();
            const srcRect = sourceEl.getBoundingClientRect();
            const sx = srcRect.left + srcRect.width / 2 - containerRect.left;
            const sy = srcRect.top + srcRect.height / 2 - containerRect.top;

            const nextLines: { id: string; x1: number; y1: number; x2: number; y2: number }[] = [];
            targets.forEach((target) => {
                const targetEl = cardRefs.current[target];
                if (!targetEl) return;
                const trgRect = targetEl.getBoundingClientRect();
                const tx = trgRect.left + trgRect.width / 2 - containerRect.left;
                const ty = trgRect.top + trgRect.height / 2 - containerRect.top;
                nextLines.push({
                    id: `${title}-${target}`,
                    x1: sx,
                    y1: sy,
                    x2: tx,
                    y2: ty,
                });
            });
            setLines(nextLines);
        },
        [connections],
    );

    const handleTiltMove = (title: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 26; // tilt toward cursor horizontally (stronger)
        const rotateX = (0.5 - y) * 18; // tilt toward cursor vertically (stronger)

        card.style.setProperty("--tilt-x", `${rotateX}deg`);
        card.style.setProperty("--tilt-y", `${rotateY}deg`);
        card.classList.add("is-tilting");
        setActive(title);
        computeLines(title);
    };

    const handleTiltLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const card = e.currentTarget;
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.classList.remove("is-tilting");
        setActive(null);
        setLines([]);
    };

    return (
        <section
            className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
            ref={techRef}
            style={{ ["--orb-hue" as string]: hue } as React.CSSProperties}
        >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 text-center">
                {t("main.TechStack")}
            </h2>
            <FloatingOrbs hue={hue} className="orb-field--wide" />
            <div
                ref={containerRef}
                className="
          relative z-10
          grid
          grid-cols-2
          xs:grid-cols-3
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
          gap-5 sm:gap-7 lg:gap-8
          w-full
          max-w-5xl
        "
            >
                {active && lines.length > 0 && (
                    <svg className="stack-tracer pointer-events-none" aria-hidden="true" width="100%" height="100%">
                        <defs>
                            <linearGradient id="stackLine" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
                                <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.95" />
                            </linearGradient>
                        </defs>
                        {lines.map((l) => (
                            <line
                                key={l.id}
                                x1={l.x1}
                                y1={l.y1}
                                x2={l.x2}
                                y2={l.y2}
                                stroke="url(#stackLine)"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                                className="stack-tracer-line"
                            />
                        ))}
                        {lines.map((l) => (
                            <circle key={`${l.id}-dot`} cx={l.x2} cy={l.y2} r="4" className="stack-tracer-dot" />
                        ))}
                    </svg>
                )}
                {data.map((i) => (
                    <a
                        key={`${i.id}-${i.title}`}
                        href={i.link || undefined}
                        target={i.link ? "_blank" : undefined}
                        rel={i.link ? "noreferrer" : undefined}
                        ref={(el) => (cardRefs.current[i.title] = el)}
                        onMouseMove={handleTiltMove(i.title)}
                        onMouseLeave={handleTiltLeave}
                        className={`
              group
              tech-tilt
              flex flex-col items-center
              p-4 sm:p-5
              rounded-2xl
              bg-gray-100 dark:bg-[#1d1d1d]
              shadow-md dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]
              transition
              ${i.link ? "hover:-translate-y-1 hover:shadow-xl cursor-pointer" : "cursor-default opacity-90"}
            `}
                    >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                            <img
                                src={i.img}
                                alt={i.title}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <p className="mt-3 text-sm sm:text-base lg:text-lg font-semibold text-center">
                            {i.title}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default TechStack;
