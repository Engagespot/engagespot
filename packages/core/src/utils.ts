/**
 * Finds browser from userAgent
 */
const findBrowser = () => {
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
  else 'other';
};

const urlBase64ToUInt8Array = (base64String: string) => {
  if (!base64String)
    throw 'urlBase64ToUInt8Array function expects atleast one parameter.';

  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
};

export const utils = {
  findBrowser,
  urlBase64ToUInt8Array,
};
