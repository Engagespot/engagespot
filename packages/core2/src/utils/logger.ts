export type LogType = ReturnType<typeof createLogger>;
type LogParams = Parameters<typeof console.log>;

/**
 * Wrapper for this._log which considers this.debug value
 * @param message
 */
const log = (message: LogParams) => {
  console.log('[Engagespot-Core] ', message);
};

export const createLogger = (debug: boolean) => {
  return (...params: LogParams) => {
    if (debug) {
      log(params);
    }
  };
};
