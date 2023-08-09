module.exports = {
    plugins: [
        require("postcss-preset-env")({
            stage: 1,
        }),
        require("cssnano")({ preset: "default" }),
    ]
}