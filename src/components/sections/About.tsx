import React from 'react';
import {useTranslation} from "react-i18next";


function About({aboutRef}) {
    const {t} = useTranslation()


    return (
        <section className="w-full flex items-center justify-center py-20" ref={aboutRef}>
            <div className="max-w-6xl w-full flex flex-col items-center px-6">

                <h1 className="text-4xl font-bold mb-12">
                    {t('main.aboutMe.title')}
                </h1>

                <div
                    className="
        flex flex-col md:flex-row
        items-center md:items-start
        gap-12
        w-full
        p-10
        rounded-3xl
        bg-gray-100
        dark:bg-[#1d1d1d]
        shadow-xl
        dark:shadow-[0_0_25px_rgba(0,0,0,0.5)]
      "
                >

                    {/* Фото слева */}
                    <div className="flex w-full md:w-1/3 justify-center">
                        <img
                            src="/PersonPhoto/avatar/img.png"
                            alt="Персональное фото"
                            className="
                            rounded-2xl
                            w-48 h-48 md:w-64 md:h-64
                            object-cover
                            shadow-lg
                            dark:shadow-[0_0_20px_rgba(0,0,0,0.4)]
                          "
                        />
                    </div>

                    {/* Текст справа */}
                    <div className="flex-1">
                        <p className="text-2xl font-semibold leading-relaxed dark:text-gray-200">
                            {t('main.aboutMe.p')}
                        </p>
                    </div>

                </div>
            </div>
        </section>


    );
}

export default About;