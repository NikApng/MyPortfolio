import {useTranslation} from "react-i18next";

const {t} = useTranslation()
export const projects = [
    {
        id: 1,
        title: "DogLead",
        description: "Полноценный сайт с каталогом, товарами и админкой.",
        stack: ["React", "TypeScript", "Tailwind", "Vite", "Zustand"]
    },
    {
        id: 2,
        title: "RedFax Messenger",
        description: "Многозадачный мессенджер c чатами и звонками.",
        stack: ["React", "Redux Tool Kit", "TypeScript", "Tailwind", "Vite"]
    },
    {
        id: 3,
        title: "TZ-List",
        description: {t("main.phone")},
        link: "https://github.com/NikApng/TZList",
        stack: ["React", "TypeScript", "Tailwind", "Zustand"]
    },
    {
        id: 4,
        title: "Mini-Market",
        description: "Минимально действующий магазин каталог из free API с корзиной.",
        link: "https://github.com/NikApng/TZList",
        stack: ["React", "TypeScript", "Tailwind", "RTK", "Vite"]
    }
];