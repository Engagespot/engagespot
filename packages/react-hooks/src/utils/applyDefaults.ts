import { UseEngagespotOptions } from '../hooks/useEngagespot';
import { dateFunctions, defaultDateFormatter } from './dateUtils';
import { useNotifications } from '../hooks/useNotifications';
import { Plugin } from './plugins';
import { Options } from '@engagespot/core';
import { NotificationEvents } from 'src/hooks/useEvents';
import { StateReducer, DataTransformer } from './hookUtils';

export type EngagespotProps = ReturnType<typeof applyDefaults>;

export interface UseEngagespotCommonProps extends Options {
  apiKey: string;
  formatDate?: (dateString: string, dateFns: typeof dateFunctions) => string;
  events?: NotificationEvents;
  plugins?: Plugin[];
  stateReducer?: StateReducer | StateReducer[];
  dataTransformer?: DataTransformer;
  floatingPanelOptions?: any;
  scrollRoot?: any;
}

export function applyDefaults(props: UseEngagespotOptions) {
  const {
    formatDate = defaultDateFormatter,
    stateReducer = (state, action, prevState) => state,
    dataTransformer = (rawData, transformedData) => transformedData,
    plugins = [],
    ...options
  } = props;

  const allPlugins = [useNotifications, ...plugins] as Plugin[];
  props = {
    formatDate,
    plugins: allPlugins,
    stateReducer,
    dataTransformer,
    ...options,
  };
  const propDefaults = allPlugins.flatMap(plugin => {
    return plugin.applyDefaults ? plugin.applyDefaults : [];
  });
  props = propDefaults.reduce((props, applyDefault) => {
    return applyDefault(props);
  }, props);

  return props as Required<UseEngagespotOptions>;
}
