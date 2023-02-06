import { Configuration } from 'webpack-dev-server';
import { BuildOptions } from './types';

export const buildDevServer = (options: BuildOptions): Configuration => {
  const { port } = options;

  return {
    port,
    open: true
  }
}
