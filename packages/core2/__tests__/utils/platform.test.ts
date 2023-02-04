import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { getPlatform } from '../../src/utils/platform';

describe('getPlatform', () => {
  describe('when running in a web environment', () => {
    it('returns "web"', () => {
      // Arrange
      const originalDocument = global.document;
      global.document = {} as any;

      // Act
      const platform = getPlatform();

      // Assert
      expect(platform).toBe('web');

      // Clean up
      global.document = originalDocument;
    });
  });

  describe('when running in a React Native environment', () => {
    it('returns "react-native"', () => {
      // Arrange
      const originalNavigator = global.navigator;
      const originalDocument = global.document;
      global.document = undefined as any;
      global.navigator = { product: 'ReactNative' } as any;

      // Act
      const platform = getPlatform();

      // Assert
      expect(platform).toBe('react-native');

      // Clean up
      global.navigator = originalNavigator;
      global.document = originalDocument;
    });
  });

  describe('when running in a Node.js environment', () => {
    it('returns "node"', () => {
      const originalDocument = global.document;
      global.document = undefined as any;
      // Act
      const platform = getPlatform();

      // Assert
      expect(platform).toBe('node');
      global.document = originalDocument;
    });
  });
});
