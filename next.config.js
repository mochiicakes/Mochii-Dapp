const path = require('path');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'videos/[name].[ext]', // Define the path where videos will be copied
          },
        },
      ],
    });

    return config;
  },
};
