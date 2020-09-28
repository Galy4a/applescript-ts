import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
      rules: [{
          test: /\.ts$/,
          use: 'ts-loader',
          include: path.resolve('src'),
      }],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  }
};

export default config;
