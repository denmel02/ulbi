import { BuildMode } from './mode';

export interface BuildEnv {
  mode?: BuildMode;
  port?: number;
}