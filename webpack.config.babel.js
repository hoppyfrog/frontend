import path from 'path';

export const entry = './main.js';

export const output = {
  path: path.join(__dirname, 'dist'),
  filename: 'index.js',
};

export const devServer = {
  inline: true,
  port: 3333,
};

export const module = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      },
    },
  ],
};
