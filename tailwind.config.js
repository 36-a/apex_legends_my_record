/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["Ubuntu"],
                macondo: ["Macondo"],
            },
            boxShadow: {
                bottom: "0px 5px 10px 0px rgba(0,0,0,0.6)",
                blue: "3px 3px 10px -1px #336699",
            },
            gridTemplateColumns: {
                fill: "repeat(auto-fill, minmax(288px,1fr))",
            },
            gridTemplateRows: {
                fit: "auto 1fr auto",
            },
        },
    },
    plugins: [],
};

