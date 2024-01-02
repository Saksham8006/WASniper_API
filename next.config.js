const webpack = require('webpack');

module.exports = {
  webpack: (config, { isServer }) => {
    // Apply the IgnorePlugin only on the client side
    if (!isServer) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^https:\/\/ultramsg\.com\/assets\//,
        })
      );
    }

    return config;
  },
};
