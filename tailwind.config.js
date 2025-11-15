export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundSize: {
                "200": "200% 200%",
            },
            animation: {
                "gradient-move": "gradient-move 6s ease infinite",
            },
            keyframes: {
                "gradient-move": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
        },
    },
    plugins: [],
}
