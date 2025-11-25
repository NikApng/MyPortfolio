import React from "react";
import { data } from "@/data/tech.ts";
import { useTranslation } from "react-i18next";

function TechStack({ techRef }) {
    const { t } = useTranslation();

    return (
        <section
            className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
            ref={techRef}
        >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 text-center">
                {t("main.TechStack")}
            </h2>

            <div
                className="
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
                {data.map((i) => (
                    <a
                        key={i.id}
                        href={i.link || undefined}
                        target={i.link ? "_blank" : undefined}
                        rel={i.link ? "noreferrer" : undefined}
                        className={`
              group
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
