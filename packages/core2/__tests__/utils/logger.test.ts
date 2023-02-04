import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { createLogger } from '../../src/utils/logger';

describe('createLogger', () => {
  describe('when debug is true', () => {
    test('calls the log function with the given parameters', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      const createDebugLogger = createLogger(true);
      const logParams = ['test', { key: 'value' }];

      createDebugLogger(...logParams);

      expect(consoleSpy).toHaveBeenCalledWith('[Engagespot-Core] ', logParams);
    });
  });

  describe('when debug is false', () => {
    test('does not call the log function', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      const createReleaseLogger = createLogger(false);
      const logParams = ['test', { key: 'value' }];

      createReleaseLogger(...logParams);

      expect(consoleSpy).not.toHaveBeenCalled();
    });
  });
});
