/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#ffffff",
                foreground: "#0f172a", // Slate-900 for text
                muted: "#475569",     // Slate-600 for muted text
                border: "#e2e8f0",    // Slate-200 for borders
                primary: {
                    DEFAULT: "#3d5daa", // Clofy Blue
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#8ccda6", // Clofy Green
                    foreground: "#0f172a",
                },
                accent: {
                    DEFAULT: "#7f3f97", // Clofy Purple
                    foreground: "#ffffff",
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
