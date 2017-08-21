module.exports = {
    entry: "./main2.ts",
    output: {
        path: __dirname,
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};
