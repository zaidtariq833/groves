module.exports = {
    // other webpack configurations
    module: {
      rules: [
        {
          test: /\.(mp4|webm|ogg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[groves-video].[mp4]',
              outputPath: 'videos/'
            }
          }
        }
      ]
    }
  };
  