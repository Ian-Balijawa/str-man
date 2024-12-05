
import {
  toCamelCase,
  toSnakeCase,
  toKebabCase,
  toPascalCase,
  isValidEmail,
  isValidURL,
  isAlphanumeric,
  truncate,
  padString
} from '../index';

describe('String Utility Functions', () => {
  describe('Case Conversion', () => {
    test('toCamelCase', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld');
      expect(toCamelCase('Hello-World')).toBe('helloWorld');
    });

    test('toSnakeCase', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
      expect(toSnakeCase('HelloWorld')).toBe('hello_world');
    });

    test('toKebabCase', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world');
      expect(toKebabCase('HelloWorld')).toBe('hello-world');
    });

    test('toPascalCase', () => {
      expect(toPascalCase('hello world')).toBe('HelloWorld');
      expect(toPascalCase('hello-world')).toBe('HelloWorld');
    });
  });

  describe('Validation', () => {
    test('isValidEmail', () => {
      expect(isValidEmail('test@example.com')).toBeTruthy();
      expect(isValidEmail('invalid-email')).toBeFalsy();
    });

    test('isValidURL', () => {
      expect(isValidURL('https://www.example.com')).toBeTruthy();
      expect(isValidURL('not a url')).toBeFalsy();
    });

    test('isAlphanumeric', () => {
      expect(isAlphanumeric('Hello123')).toBeTruthy();
      expect(isAlphanumeric('Hello World!')).toBeFalsy();
    });
  });

  describe('String Manipulation', () => {
    test('truncate', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...');
      expect(truncate('Short', 10)).toBe('Short');
    });

    test('padString', () => {
      expect(padString('123', 5)).toBe('123  ');
      expect(padString('123', 5, '0', 'left')).toBe('00123');
    });
  });
});
