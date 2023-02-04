import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { getOrCreateDeviceId } from '../../src/utils/device';

describe('getOrCreateDeviceId', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  describe('when the device ID exists in local storage', () => {
    test('returns the locally saved device ID', () => {
      let locallySavedDeviceId = '1234';

      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(
        locallySavedDeviceId
      );
      const result = getOrCreateDeviceId();

      expect(result).toBe(locallySavedDeviceId);
    });
  });

  describe('when the device ID does not exist in local storage', () => {
    test('returns the newly created device ID', () => {
      const result = getOrCreateDeviceId();
      expect(result).lengthOf(36);
    });
  });
});
