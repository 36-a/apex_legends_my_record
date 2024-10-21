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
                right: "7px 7px 15px -10px #475569",
            },
            gridTemplateColumns: {
                fill: "repeat(auto-fill, minmax(288px,1fr))",
            },
            gridTemplateRows: {
                fit: "auto 1fr auto",
            },
            screens: {
                md: "700px",
                sm: "610px",
                xs: "455px",
                "2xs": "360px",
            },
        },
    },
    plugins: [],
};

