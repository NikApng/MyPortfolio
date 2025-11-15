import React from 'react';
import {useTranslation} from "react-i18next";
import OpendIt from "../../../public/icons/OpendIt.tsx";

function Footer(props) {
    const {t} = useTranslation()

    return (
        <footer
            className="
    text-black dark:text-white
    bg-white dark:bg-black/30
    rounded-2xl shadow-xl dark:shadow-lg
    m-2 p-4
  "
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">

                <div className="text-lg dark:text-gray-300">
                    {t("footer.phone")}
                </div>

                <ul className="flex flex-row items-center gap-8">
                    <li>
                        <a
                            href=""
                            className="
            inline-flex items-center gap-1
            border border-transparent
            hover:border-black dark:hover:border-white
            p-1 rounded-lg duration-300
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
            p-1 rounded-lg duration-300
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
            p-1 rounded-lg duration-300
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
            p-1 rounded-lg duration-300
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