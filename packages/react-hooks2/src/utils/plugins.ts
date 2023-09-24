import { Hooks } from './hookUtils';

type pluginFn = (hooks: Hooks) => void;

export type Plugins = readonly Plugin[];

export interface Plugin extends pluginFn {
  pluginName: string;
  applyDefaults?: Function;
}
