module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    setupFiles: ["<rootDir>/tests/unit/index"],
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    }
}
