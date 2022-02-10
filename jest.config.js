module.exports = {
    verbose: true,
    setupFiles: [
        'dotenv/config'
    ],
    setupFilesAfterEnv: [
        './src/tests/config.js'
    ],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    }
}