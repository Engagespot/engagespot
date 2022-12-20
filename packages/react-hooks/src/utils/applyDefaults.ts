import { UseEngagespotOptions } from '../hooks/useEngagespot';
import { dateFunctions, defaultDateFormatter } from './dateUtils';
import { useNotifications } from '../hooks/useNotifications';
import { Plugins } from './plugins';
import { Options } from '@engagespot/core';
import { NotificationEvents } from 'src/hooks/useEvents';
import { StateReducer, DataTransformer } from './hookUtils';
import { useInfiniteScroll } from 'src/hooks/useInfiniteScroll';
import { useBrowserWebPush, useFloatingNotification } from 'src/hooks';

export type EngagespotProps = ReturnType<typeof applyDefaults>;

export type Scrolling = readonly [typeof useInfiniteScroll];
export type Floating = readonly [typeof useFloatingNotification];
export type WebPush = readonly [typeof useBrowserWebPush];

export type ScrollingFloating = readonly [Scrolling[0], Floating[0]];
export type ScrollingWebPush = readonly [Scrolling[0], WebPush[0]];
export type ScrollingFloatingWebPush = readonly [
  Scrolling[0],
  Floating[0],
  WebPush[0]
];

export interface UseEngagespotCommonProps<T extends Plugins> extends Options {
  apiKey: string;
  formatDate?: (dateString: string, dateFns: typeof dateFunctions) => string;
  events?: NotificationEvents;
  plugins?: T;
  stateReducer?: StateReducer | StateReducer[];
  dataTransformer?: DataTransformer;
  floatingPanelOptions?: any;
  scrollRoot?: HTMLElement | null;
}

export function applyDefaults(props: UseEngagespotOptions<Plugins>) {
  const {
    formatDate = defaultDateFormatter,
    stateReducer = (state, action, prevState) => state,
    dataTransformer = (transformedData, rawData) => transformedData,
    plugins = [],
    ...options
  } = props;

  const allPlugins = [useNotifications, ...plugins] as Plugins;
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

  return props as Required<UseEngagespotOptions<Plugins>>;
}
