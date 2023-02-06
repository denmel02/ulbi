import path from 'path';
import { buildWebpackConfig } from './config/build';

const config = buildWebpackConfig({
  mode: 'development',
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
});

export default config;