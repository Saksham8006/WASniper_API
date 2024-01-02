// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configure client-specific optimizations
      config.optimization.splitChunks.cacheGroups = {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      };
    }

    return config;
  },
};
