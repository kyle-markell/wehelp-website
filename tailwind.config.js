/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#22c55e', // green-500
                    hover: '#16a34a', // green-600
                }
            }
        },
    },
    plugins: [],
}
