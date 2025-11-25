import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/components/ui/Button.tsx";
import Moon from "../../../public/icons/themes/moon.tsx";
import Sun from "../../../public/icons/themes/Sun.tsx";
import Download from "../../../public/icons/Download.tsx";

type HeaderProps = {
    onAboutClick: () => void;
    onProjectsClick: () => void;
    onLanguagesClick: () => void;
};

function Header({ onAboutClick, onProjectsClick, onLanguagesClick }: HeaderProps) {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const { t, i18n } = useTranslation();

    return (
        <header
            className="
        sticky top-0 z-50
        text-black dark:text-white
        bg-white/80 dark:bg-black/40
        backdrop-blur-md
        rounded-2xl
        m-2
        px-3 py-3 sm:px-4 sm:py-4
        shadow-xl dark:shadow-lg
      "
        >
            <div
                className="
          flex flex-col gap-3
          md:flex-row md:items-center md:justify-between md:gap-6
        "
            >
                <div className="flex items-center gap-3 sm:gap-4">
                    <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                        {t("header.title")}
                    </h1>
                    <img
                        width={50}
                        src="/PersonPhoto/Logo/LogoNikApng.png"
                        alt="presonal logo"
                        className="rounded-lg w-10 h-10 sm:w-12 sm:h-12 object-cover"
                    />
                </div>

                <nav className="w-full md:w-auto">
                    <ul
                        className="
              flex
              justify-center md:justify-center
              items-center
              gap-4 sm:gap-8 lg:gap-10
              text-base sm:text-lg
              flex-wrap
            "
                    >
                        <li className="dark:text-gray-300">
                            <Button variant="nav" onClick={onAboutClick}>
                                {t("header.navigation.about")}
                            </Button>
                        </li>
                        <li className="dark:text-gray-300">
                            <Button variant="nav" onClick={onProjectsClick}>
                                {t("header.navigation.stack")}
                            </Button>
                        </li>
                        <li className="dark:text-gray-300">
                            <Button variant="nav" onClick={onLanguagesClick}>
                                {t("header.navigation.Call")}
                            </Button>
                        </li>
                    </ul>
                </nav>

                <div
                    className="
            flex
            items-center
            justify-between md:justify-end
            gap-3 sm:gap-4
            flex-wrap
          "
                >
                    <a
                        href="/resume/ResumeDownload.pdf"
                        download
                        className="
              inline-flex items-center gap-2
              text-sm sm:text-base
              cursor-pointer
            "
                    >
                        {t("header.download")}
                        <Download className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
                    </a>

                    <div className="flex items-center gap-2">
                        <Button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
                            {theme === "light" ? <Sun /> : <Moon />}
                        </Button>

                        <Button onClick={() => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")}>
                            {t("header.button")}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
