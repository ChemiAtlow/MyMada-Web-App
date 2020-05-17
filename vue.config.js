const fs = require("fs");
const webpack = require("webpack");
const packageJson = fs.readFileSync("./package.json");
const version = JSON.parse(packageJson).version || 0;
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    PACKAGE_VERSION: '"' + version + '"'
                }
            })
        ]
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/utils/_variables.scss";`
            }
        }
    },
    pwa: {
        name: "דיווחי מגן דוד אדום",
        themeColor: "#10133B",
        msTileColor: "#10133B",
        manifestOptions: {
            background_color: "#E0E0E0"
        }
    }
};
