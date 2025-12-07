import React, { useState } from "react";
import OpendIt from "/public/icons/OpendIt.tsx";
import Button from "@/components/ui/Button.tsx";

interface Project {
    id: number;
    title: string;
    description: string;
    imgs: string | string[];
    link?: string;
    stack: string[];
}

interface ProjectCardProps {
    proj: Project;
    t: (key: string) => string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({proj, t}) => {
    const images = Array.isArray(proj.imgs) ? proj.imgs : [proj.imgs];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNavHover, setIsNavHover] = useState(false);

    const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 18; // softer tilt for projects
        const rotateX = (0.5 - y) * 12;

        card.style.setProperty("--tilt-x", `${rotateX}deg`);
        card.style.setProperty("--tilt-y", `${rotateY}deg`);
        card.classList.add("is-tilting");
    };

    const handleTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.classList.remove("is-tilting");
    };

    const hasManyImages = images.length > 1;

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const currentImage = images[currentIndex];

    return (
        <div
            className="
        relative group project-tilt
        bg-gray-100 dark:bg-[#1d1d1d]
        rounded-2xl
        shadow-xl dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]
        p-5 sm:p-6
        overflow-hidden
        transition
        hover:-translate-y-1
        hover:shadow-2xl
        dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.6)]
        duration-300
      "
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
        >
            <div className="absolute inset-0">
                <img
                    src={currentImage}
                    alt={proj.title}
                    className="
            w-full h-full object-cover
            opacity-60
            blur-sm
            group-hover:blur-none
            group-hover:opacity-100
            transition
            duration-300
          "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"/>
            </div>

            {hasManyImages && (
                <>
                    <button
                        type="button"
                        onClick={handlePrev}
                        onMouseEnter={() => setIsNavHover(true)}
                        onMouseLeave={() => setIsNavHover(false)}
                        className="
        absolute left-3 top-1/2 -translate-y-1/2
        w-10 h-10 rounded-full
        bg-black/60 text-white
        flex items-center justify-center
        text-lg
        backdrop-blur-sm
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        z-20
      "
                    >
                        ‹
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        onMouseEnter={() => setIsNavHover(true)}
                        onMouseLeave={() => setIsNavHover(false)}
                        className="
        absolute right-3 top-1/2 -translate-y-1/2
        w-10 h-10 rounded-full
        bg-black/60 text-white
        flex items-center justify-center
        text-lg
        backdrop-blur-sm
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        z-20
      "
                    >
                        ›
                    </button>
                </>
            )}

            <div
                className={`
          relative z-10 flex flex-col justify-between h-full
          transition-opacity duration-200
          ${isNavHover ? "opacity-0" : "opacity-100"}
        `}
            >
                <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold">
                        {proj.title}
                    </h2>

                    <p className="text-sm sm:text-base">
                        {t(proj.description)}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2 ">
                        {proj.stack.map((item) => (
                            <span
                                key={item}
                                className="
                  text-xs sm:text-sm
                  px-3 py-1
                  rounded-lg
                  bg-gray-300 dark:bg-gray-700
                  dark:text-gray-200
                "
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {proj.link ? (
                    <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="
                                  mt-5
                                  inline-flex items-center gap-1.5
                                  text-base sm:text-lg font-semibold
                                  border border-transparent
                                  hover:border-black dark:hover:border-white
                                  p-2 rounded-xl
                                  duration-300
                                  w-fit

                                "
                    >
                        {t("main.projects.open")}
                        <OpendIt/>
                    </a>
                ) : (
                    <span
                        className="
              mt-5 inline-flex
              px-3 py-1
              text-xs sm:text-sm
              rounded-full
              bg-gray-300 dark:bg-gray-700
              text-gray-800 dark:text-gray-100
            "
                    >
                        {t("proj.commercial")}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
