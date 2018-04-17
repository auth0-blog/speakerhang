var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap' },
       { test: /\.css$/, loader: 'style!css' },
       {
           test   : /\.woff/,
           loader : require.resolve("url-loader") + '?prefix=font/&limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]'
       },
       {
          test   : /\.ttf/,
          loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
       },
       {
          test   : /\.eot/,
          loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
       },
       {
          test   : /\.svg/,
          loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
       },
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
