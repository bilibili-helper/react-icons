const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const srcPath = path.resolve('previewSite');
const distPath = path.resolve(__dirname, '..', 'docs');

console.log(distPath);
module.exports = (env) => {
    const mode = env.production ? 'production' : 'development';
    return {
        target: 'web',
        //watch: true,
        mode,
        node: {
            //global: false,
            //fs: 'empty',
            //webpack5: false,
            //global: true,
            //__filename: true,
            //__dirname: true,
        },
        //experiments: {
        //    topLevelAwait: true,
        //},
        devtool: false,
        devServer: {
            allowedHosts: 'all',
            static: distPath,
            port: 8080,
            hot: true,
        },
        watchOptions: {
            aggregateTimeout: 1000, // milliseconds
            poll: 1000,
            ignored: ['node_modules'],
        },
        entry: [srcPath],
        output: {
            filename: '[name].js',
            path: distPath,
            chunkFilename: '[name].bundle.js',
            publicPath: '/',
        },
        resolve: {
            mainFiles: ['index'],
            extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.css', '.less', '.scss', '.sass'],
            fallback: {
                fs: false,
            },
            alias: {
                'Icons': path.resolve('dist'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    include: /(\/src\/)/,
                    exclude: /(\/node_modules\/|\.min\.js|\.d\.ts|\.d\.ts\.map\/)/,
                    options: {
                        configFile: './tsconfig.json',
                    },
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /(\/node_modules\/|\.min\.js\/)/,
                    include: /(\/src|previewSite\/)/,
                    options: {
                        configFile: path.resolve(srcPath, 'babel.config.js'),
                    },
                },
                {
                    test: /\.(css|scss|sass)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../',
                            },
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                    exclude: /(\.ttf)/,
                },
                //{
                //    test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
                //    loader: 'url-loader',
                //},
            ],
        },
        plugins: [
            //new TsconfigPathsPlugin({/!* options: see below *!/}),
            new HTMLWebpackPlugin({
                filename: './index.html',
            }),
            new CaseSensitivePathsPlugin(),
            new MiniCssExtractPlugin({
                filename: path.join('styles', '[name].css'),
                chunkFilename: path.join('styles', '[name].css'),
            }),
            new CircularDependencyPlugin({
                // exclude detection of files based on a RegExp
                exclude: /node_modules/,
                // include specific files based on a RegExp
                include: /previewSite/,
                // add errors to webpack instead of warnings
                failOnError: true,
                // allow import cycles that include an asyncronous import,
                // e.g. via import(/!* webpackMode: "weak" *!/ './file.js')
                allowAsyncCycles: false,
                // set the current working directory for displaying module paths
                cwd: process.cwd(),
            }),
            //new BundleAnalyzerPlugin(),
        ],
        optimization: {
            splitChunks: {
                minChunks: 2,
                maxInitialRequests: Infinity,
                cacheGroups: {
                    defaultVendors: {
                        name: 'vendors.bundle',
                        test: /[\\/](node_modules)[\\/]/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
            minimizer: [
                mode === 'production' ? new TerserPlugin({
                    terserOptions: {
                        parse: {ecma: 8},
                        compress: {
                            ecma: 8,
                            warnings: false,
                            arrows: false,
                            collapse_vars: false,
                            comparisons: false,
                            computed_props: false,
                            hoist_funs: false,
                            hoist_props: false,
                            hoist_vars: false,
                            inline: false,
                            loops: false,
                            negate_iife: false,
                            properties: false,
                            reduce_funcs: false,
                            reduce_vars: false,
                            switches: false,
                            toplevel: false,
                            typeofs: false,
                            booleans: true,
                            if_return: true,
                            sequences: true,
                            unused: true,
                            conditionals: true,
                            dead_code: true,
                            evaluate: true,
                            drop_console: true,
                            pure_funcs: ['console.log'],
                        },
                        mangle: {safari10: true},
                        output: {ecma: 8, comments: false, ascii_only: true},
                    },
                }) : null,
                env === 'production' ? new CssMinimizerPlugin() : null,
            ].filter(Boolean),
        },
    };
};
