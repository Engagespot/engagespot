import { Hooks } from './hookUtils';

type pluginFn = (hooks: Hooks) => void;

export interface Plugin extends pluginFn {
  pluginName: string;
  applyDefaults?: Function;
}
