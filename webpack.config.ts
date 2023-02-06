import path from 'path'
import { Configuration } from 'webpack';
import { BuildEnv, buildWebpackConfig } from './config/build';

export default (env: BuildEnv): Configuration => buildWebpackConfig({
  mode: env.mode || 'development',
  port: env.port || 3000,
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
})