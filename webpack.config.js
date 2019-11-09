const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', //production or none
  devServer: {
    host: '0.0.0.0'
  },
  entry: {
    main: './src/app/index.js',
    content: './src/public/content.html',
    style: './src/style/style.css',
    mobile_style: './src/style/mobile-style.css',
    tablet_style: './src/style/tablet-style.css',
    loading: './src/app/loading.js',
    selector: './src/app/selector.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader',
                options: {minimize: true}
            }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader'
        ],
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({                 // Create new HTMLWebpackPlugin on every new page u want to load.
      template: './src/public/index.html',
      filename: './index.html',
      chunks: ['main', 'loading']
    }),
    new HTMLWebPackPlugin({
      template: './src/public/content.html',
      filename: './content.html',
      chunks: ['selector']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: ['style', 'mobile_style', 'tablet_style']
    })
  ]
};