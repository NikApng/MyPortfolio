import React from "react";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard.tsx";
import { useScrollHue } from "@/hooks/useScrollHue.ts";
import FloatingOrbs from "@/components/ui/FloatingOrbs.tsx";

function Projects({ projectsRef }) {
    const { t } = useTranslation();
    const hue = useScrollHue(6, 210);

    return (
        <section
            id="projects"
            className="w-full flex items-center justify-center py-16 sm:py-20 lg:py-24 relative overflow-hidden"
            ref={projectsRef}
            style={{ ["--orb-hue" as string]: hue } as React.CSSProperties}
        >
            <FloatingOrbs hue={hue} className="orb-field--tall" />
            <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6 relative z-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 text-center">
                    {t("main.projects.title")}
                </h1>

                <div
                    className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8 sm:gap-10
            w-full
          "
                >
                    {projects.map((proj) => (
                        <ProjectCard key={proj.id} proj={proj} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
