const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;

module.exports = {
    entry: './src/bootstrap',
    devServer: {
        port: 3030, // you can change the port
    },
    output: {
        path: path.join(__dirname, "/dist"), // the bundle output path
        filename: "bundle.js", // the name of the bundle
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                app2: "app2@http://localhost:3000/RsApp.js",
            },
            shared: {
                react: {singleton: true, requiredVersion: '^19.0.0'},
                "react-dom": {singleton: true, requiredVersion: '^19.0.0'}
            },
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: "url-loader",
                options: {limit: false},
            },
        ],
    },
};
