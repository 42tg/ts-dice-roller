module.exports = function(wallaby) {
    return {
        files: ["src/**/*.ts", "tsconfig.json", "package.json"],
        tests: ["test/**/*.ts"],
        env: {
            type: "node"
        },
        testFramework: "jest",
        debug: false,

        compilers: {
            "**/*.ts?(x)": wallaby.compilers.typeScript({
                useStandardDefaults: true
            })
        },

        setup: function(wallaby) {
            var jestConfig = require("./package.json").jest
            delete jestConfig.transform
            wallaby.testFramework.configure(jestConfig)
        }
    }
}
