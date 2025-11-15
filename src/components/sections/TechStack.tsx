import React from "react";
import {data} from "@/data/tech.ts";
import {useTranslation} from "react-i18next";

function TechStack() {
const {t} = useTranslation()

    return (
        <section className="w-full flex flex-col items-center px-4 py-20">
            <h2 className="text-4xl font-bold mb-12">{t('main.TechStack')}</h2>

            <div
                className="
                      grid
                      grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
                      gap-8
                      w-full max-w-5xl
                    "
            >


                {data.map(i => (
                    <div key={i.id}
                         className="flex flex-col items-center p-5 bg-gray-200 dark:bg-[#1d1d1d] rounded-2xl shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition hover:scale-105 hover:shadow-xl">
                        <img src={i.img} alt={i.title} className="w-14 h-14"/>
                        <p className="mt-3 text-lg font-semibold">{i.title}</p>
                    </div>

                ))}

            </div>
        </section>
    );
}

export default TechStack;
