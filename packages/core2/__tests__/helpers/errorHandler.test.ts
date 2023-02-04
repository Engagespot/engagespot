import { validateIncomingArgs, handleError } from '../../src/helpers/errorHandler';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('handleError', () => {
  describe('when severity is "error"', () => {
    it('throws an error with the correct message', () => {
      const errorType = 'noOptions';

      expect(() => handleError(errorType)).toThrowError(
        '[ES1000]: options is required while instantiating Engagespot.'
      );
    });

    it('throws an error with additional information', () => {
      const errorType = 'noOptions';

      expect(() => handleError(errorType, ['Additional info.'])).toThrowError(
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
        ['Additional info.']
      );
    });
  });
});

describe('validateIncomingArgs', () => {
  it('throws an error if `options` is falsy', () => {
    expect(() => {
      validateIncomingArgs(null as any);
    }).toThrowError(
      '[ES1000]: options is required while instantiating Engagespot.'
    );
  });

  it('throws an error if `apiKey` is falsy', () => {
    expect(() => {
      validateIncomingArgs({
        apiKey: '',
        userId: 'someId',
        userSignature: 'someSignature',
      });
    }).toThrowError(
      '[ES1007]: apiKey is required while instantiating Engagespot. '
    );
  });

  it('throws an error if `userId` is falsy', () => {
    expect(() => {
      validateIncomingArgs({
        apiKey: 'someKey',
        userId: '',
        userSignature: 'someSignature',
      });
    }).toThrowError(
      '[ES1002]: userId is required while instantiating Engagespot.'
    );
  });

  it('throws an error if `userSignature` is falsy', () => {
    const consoleSpy = vi.spyOn(console, 'warn');

    validateIncomingArgs({
      apiKey: 'someKey',
      userId: 'someId',
      userSignature: '',
    });
    expect(consoleSpy.mock.calls[0][0]).toEqual(
      '[ES1000]: Its recommended to pass a userSignature for security purposes'
    );
  });

  it('does not throw an error if all options are truthy', () => {
    expect(() => {
      validateIncomingArgs({
        apiKey: 'someKey',
        userId: 'someId',
        userSignature: 'someSignature',
      });
    }).not.toThrow();
  });
});
