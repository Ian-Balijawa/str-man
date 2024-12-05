// src/index.ts
/**
 * Converts a string to camelCase
 * @param str Input string
 * @returns camelCase version of the string
 */
export function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
}

/**
 * Converts a string to snake_case
 * @param str Input string
 * @returns snake_case version of the string
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
    .toLowerCase()
    .replace(/^_|_$/g, '');
}

/**
 * Converts a string to kebab-case
 * @param str Input string
 * @returns kebab-case version of the string
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
    .toLowerCase()
    .replace(/^-|-$/g, '');
}

/**
 * Converts a string to PascalCase
 * @param str Input string
 * @returns PascalCase version of the string
 */
export function toPascalCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^./, char => char.toUpperCase());
}

/**
 * Validates an email address
 * @param email Input email string
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a URL
 * @param url Input URL string
 * @returns Boolean indicating if URL is valid
 */
export function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if a string contains only alphanumeric characters
 * @param str Input string
 * @returns Boolean indicating if string is alphanumeric
 */
export function isAlphanumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * Truncates a string to a specified length
 * @param str Input string
 * @param length Maximum length
 * @param ellipsis Optional ellipsis string
 * @returns Truncated string
 */
export function truncate(
  str: string,
  length: number,
  ellipsis: string = '...'
): string {
  return str.length > length
    ? str.slice(0, length) + ellipsis
    : str;
}

/**
 * Pads a string to a specified length
 * @param str Input string
 * @param length Target length
 * @param char Padding character (default: ' ')
 * @param direction Padding direction (default: 'right')
 * @returns Padded string
 */
export function padString(
  str: string,
  length: number,
  char: string = ' ',
  direction: 'left' | 'right' = 'right'
): string {
  if (str.length >= length) return str;

  const padLength = length - str.length;
  const padding = char.repeat(padLength);

  return direction === 'right'
    ? str + padding
    : padding + str;
}

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

