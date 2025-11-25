🌐 Personal Portfolio – Nikita

Live Demo: https://my-portfolio-pkio.vercel.app

Современное персональное портфолио, созданное для демонстрации проектов, навыков и опыта.
Сайт выполнен на React + TypeScript с использованием Vite и полностью адаптивной вёрстки на TailwindCSS.

🚀 Tech Stack
React 19
TypeScript
Vite
TailwindCSS 4
i18next (RU/EN перевод)
CSS-тёмная/светлая тема
Анимации, UI-компоненты и динамический контент

✨ Features

Полностью адаптивный дизайн
Переключение темы (Light / Dark)
Переключение языка (RU / EN)

Разделы:
About Me
Tech Stack
Projects
Contacts

Мультиязычные текстовые ресурсы через i18next
Быстрая загрузка благодаря Vite
Хостинг на Vercel

📁 Project Structure

project
│
├── public/
│   ├── icons/
│   ├── PersonPhoto/
│   ├── resume/
│   └── preview/            # ← сюда можно складывать скриншоты
│
├── src/
│   ├── components/         # UI-компоненты
│   ├── data/               # список технологий, проектов
│   ├── i18n/               # мультиязычные JSON-файлы
│   ├── styles/             # глобальные стили, tailwind layers
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

🛠 Installation & Development

Установить зависимости:

npm install


Запустить проект в dev-режиме:

npm run dev


Собрать продакшен билд:

npm run build


Локальный предпросмотр билда:

npm run preview

🧩 Deploy (Vercel)

Проект автоматически деплоится через GitHub → Vercel.
Vercel запускает:

npm install
npm run build


и публикует содержимое dist/.

📬 Contacts

Telegram: https://t.me/nikitos_ia

GitHub: https://github.com/NikApng

📄 License

This project is open-source and free to use for learning purposes.
