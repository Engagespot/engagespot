import { isWebPlatform } from './platform';

export const DEVICE_ID_KEY = '_engagespotDeviceId';

const generateRandomId = () => {
  const id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
  return id;
};

/**
 * Creates a new random device id, sets it to local storage and returns it.
 */
export const createNewDevice = () => {
  const id = generateRandomId();
  if (isWebPlatform()) {
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
};

const getDeviceId = () => {
  if (!isWebPlatform()) return null;
  return localStorage.getItem(DEVICE_ID_KEY);
};

export const getOrCreateDeviceId = () => {
  //Read from local storage to know if this device already has an id. If yes, then save it.
  //If not create a new device id and save.
  const locallySavedDeviceId = getDeviceId();

  if (!locallySavedDeviceId) return createNewDevice();
  return locallySavedDeviceId;
};
