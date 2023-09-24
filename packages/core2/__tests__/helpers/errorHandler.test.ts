import {
  validateIncomingArgs,
  handleError,
} from '../../src/helpers/errorHandler';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('handleError', () => {
  describe('when severity is "error"', () => {
    it('throws an error with the correct message', () => {
      const errorType = 'noOptions';

      const consoleSpy = vi.spyOn(console, 'error');

      handleError(errorType);

      expect(consoleSpy.mock.calls[0][0]).toEqual(
        '[ES1000]: options is required while instantiating Engagespot. '
      );
    });

    it('console.errors with additional information', () => {
      const errorType = 'noOptions';

      const consoleSpy = vi.spyOn(console, 'error');

      handleError(errorType, 'Additional info.');

      expect(consoleSpy.mock.calls[0][0]).toEqual(
        '[ES1000]: options is required while instantiating Engagespot. Additional info.'
      );
    });
  });

  describe('when severity is "warn"', () => {
    it('calls console.warn with the correct message', () => {
      const errorType = 'noUserSignature';
      const consoleSpy = vi.spyOn(console, 'warn');

      handleError(errorType);

      expect(consoleSpy.mock.calls[0][0]).toEqual(
        '[ES1000]: Its recommended to pass a userSignature for security purposes'
      );
    });

    it('calls console.warn with additional information', () => {
      const errorType = 'noUserSignature';
      const consoleSpy = vi.spyOn(console, 'warn');

      handleError(errorType, ['Additional info.']);

      expect(consoleSpy).toHaveBeenCalledWith(
        '[ES1000]: Its recommended to pass a userSignature for security purposes',
        'Additional info.'
      );
    });
  });
});
