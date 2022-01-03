const path = require('path');

module.exports = {
    entry: {
        registration: './assets/js/registration.js'
    },
    output: {
        path: path.resolve(__dirname, 'src/assetbundles/resources'),
        filename: '[name].bundle.js'
    }
};
