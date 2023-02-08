import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { fromNow } from '../../src/utils/date';

describe('fromNow', () => {
  test('should return a few seconds ago on passing current date', () => {
    const result = fromNow(new Date().toISOString());
    expect(result).toBe('a few seconds ago');
  });
});
