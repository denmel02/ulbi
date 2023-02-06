import { BuildMode } from "./mode";
import { BuildPaths } from "./paths";

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
}