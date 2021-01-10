const path = require("path");

module.exports = {
    entry: {
        app: ['./src/index.tsx']
    },
    resolve: {
        alias: {
            '@data': path.join(__dirname, 'src/data'),
            '@domain': path.join(__dirname, 'src/domain')
        }
    }
}