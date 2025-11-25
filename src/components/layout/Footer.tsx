import React from 'react';
import { useTranslation } from "react-i18next";
import OpendIt from "../../../public/icons/OpendIt.tsx";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer
            className="
        w-auto
        text-black dark:text-white
        bg-white dark:bg-black/30
        rounded-2xl shadow-xl dark:shadow-lg
        m-2 px-4 py-5 sm:px-6
      "
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-5">

                <div className="text-base sm:text-lg dark:text-gray-300 text-center">
                    {t("footer.phone")}
                </div>

                <ul
                    className="
            flex flex-wrap
            justify-center
            items-center
            gap-4 sm:gap-6 lg:gap-8
            text-sm sm:text-base
          "
                >
                    <li>
                        <a
                            href=""
                            className="
                inline-flex items-center gap-1
                border border-transparent
                hover:border-black dark:hover:border-white
                px-2 py-1 rounded-lg duration-300
              "
                        >
                            {t("footer.mail")} <OpendIt />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://t.me/nikitos_ia"
                            className="
                inline-flex items-center gap-1
                border border-transparent
                hover:border-black dark:hover:border-white
                px-2 py-1 rounded-lg duration-300
              "
                        >
                            {t("footer.telegram")} <OpendIt />
                        </a>
                    </li>

                    <li>
                        <a
                            href=""
                            className="
                inline-flex items-center gap-1
                border border-transparent
                hover:border-black dark:hover:border-white
                px-2 py-1 rounded-lg duration-300
              "
                        >
                            {t("footer.WatsApp")} <OpendIt />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/NikApng"
                            className="
                inline-flex items-center gap-1
                border border-transparent
                hover:border-black dark:hover:border-white
                px-2 py-1 rounded-lg duration-300
              "
                        >
                            {t("footer.GitHub")} <OpendIt />
                        </a>
                    </li>
                </ul>

            </div>
        </footer>
    );
}

export default Footer;
