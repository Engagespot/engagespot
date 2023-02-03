export const getPlatform = () => {
  if (typeof document !== 'undefined') {
    return 'web';
  } else if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative'
  ) {
    return 'react-native';
  }
  return 'node';
};

export const isWebPlatform = () => getPlatform() === 'web';

/**
 * Finds browser from userAgent
 */
export const findBrowser = () => {
  if (typeof window === 'undefined') return 'other';
  const userAgentString = navigator.userAgent;

  // Detect Chrome
  let chromeAgent = userAgentString.indexOf('Chrome') > -1;

  // Detect Internet Explorer
  const IExplorerAgent =
    userAgentString.indexOf('MSIE') > -1 || userAgentString.indexOf('rv:') > -1;

  // Detect Firefox
  const firefoxAgent = userAgentString.indexOf('Firefox') > -1;

  // Detect Safari
  let safariAgent = userAgentString.indexOf('Safari') > -1;

  // Discard Safari since it also matches Chrome
  if (chromeAgent && safariAgent) safariAgent = false;

  // Detect Opera
  const operaAgent = userAgentString.indexOf('OP') > -1;

  // Discard Chrome since it also matches Opera
  if (chromeAgent && operaAgent) chromeAgent = false;

  if (chromeAgent) return 'chrome';
  else if (IExplorerAgent) return 'ie';
  else if (firefoxAgent) return 'firefox';
  else if (safariAgent) return 'safari';
  else if (operaAgent) return 'opera';
  return 'other';
};
