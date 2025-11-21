import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Button from "@/components/ui/Button.tsx";
import Moon from "../../../public/icons/themes/moon.tsx";
import Sun from "../../../public/icons/themes/Sun.tsx";
import Download from "../../../public/icons/Download.tsx";

type HeaderProps = {
    onAboutClick: () => void;
    onProjectsClick: () => void;
};

function Header({onAboutClick, onProjectsClick}: HeaderProps) {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const {t, i18n} = useTranslation();

    return (
        <header
            className="
            sticky top-0 z-50
            text-black dark:text-white
            bg-white/80 dark:bg-black/40
            backdrop-blur-md
            rounded-2xl
            m-2 p-4
            shadow-xl dark:shadow-lg
            flex items-center justify-between
          "
        >
            <div className={'flex gap-5'}>
                <h1 className="font-bold text-4xl">
                    {t("header.title")}
                </h1>
                <img width={50}
                     src="../../../public/PersonPhoto/Logo/LogoNikApng.png"
                     alt="presonal logo"
                     className='rounded-lg'
                />
            </div>


            <nav>
                <ul className="flex items-center gap-12">
                    <li className="text-xl dark:text-gray-300">
                        <Button variant="nav" onClick={onAboutClick}>{t("header.navigation.about")}</Button>
                    </li>
                    <li className="text-xl dark:text-gray-300">
                        <Button variant="nav" onClick={onProjectsClick}>{t("header.navigation.stack")}</Button>
                    </li>
                    <li className="text-xl dark:text-gray-300">
                        <Button variant="nav">{t("header.navigation.Call")}</Button>
                    </li>
                </ul>
            </nav>

            <a
                href="/resume/ResumeDownload.pdf"
                download
                className="group inline-flex items-center gap-2 cursor-pointer"
            >
                {t('header.download')}

                <Download
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6"/>
            </a>


            <div className="flex items-center gap-2">
                <Button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
                    {theme === "light" ? <Sun/> : <Moon/>}
                </Button>

                <Button onClick={() => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")}>
                    {t("header.button")}
                </Button>
            </div>
        </header>
    );
}

export default Header;
