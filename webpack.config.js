const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: '[name].js',
        library: 'another-one',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    resolve: { extensions: ['.ts', 'tsx'] },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
}
