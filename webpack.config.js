const path = require('path');

module.exports = {
    entry: './src/FormComponent.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'FormComponent',
            type: 'umd',
            export: 'default',
        },
        globalObject: 'this',
    },
    externals: {
        react: 'react',
        'react-native':'react-native'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'production',
};
