import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from '@/i18n/locales/ru.json'
import en from '@/i18n/locales/en.json'

i18n
    .use(initReactI18next)
    .init({
        lng: "ru",
        fallbackLng: "en",
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
    });

export default i18n;