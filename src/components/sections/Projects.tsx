import React from "react";
import {useTranslation} from "react-i18next";
import OpendIt from "/public/icons/OpendIt.tsx";
import {projects} from "@/data/projects";

function Projects({projectsRef}) {
    const {t} = useTranslation();

    return (
        <section
            id="projects"
            className="w-full flex items-center justify-center py-16 sm:py-20 lg:py-24"
            ref={projectsRef}
        >
            <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
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
                        <div
                            key={proj.id}
                            className="
                                        bg-gray-100 dark:bg-[#1d1d1d]
                                        rounded-2xl
                                        shadow-xl dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]
                                        p-5 sm:p-6
                                        flex flex-col
                                        justify-between
                                        transition
                                        hover:-translate-y-1
                                        hover:shadow-2xl
                                        dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.6)]
                                        duration-300
                                      "
                        >
                            <div className="space-y-4">
                                <h2 className="text-xl sm:text-2xl font-bold">
                                    {proj.title}
                                </h2>

                                <p className="text-sm sm:text-base">
                                    {t(`${proj.description}`)}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">
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
                                        >{item}</span>
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
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
