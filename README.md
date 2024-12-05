# @ianbalijawa16/str-man

A lightweight, dependency-free TypeScript library for string utilities.

## Installation

```bash
npm install @ianbalijawa16/str-man
```

## Features

- Case Conversions
- String Validations
- String Truncation and Padding

## Usage

### Case Conversions

```typescript
import { toCamelCase, toSnakeCase, toKebabCase, toPascalCase } from '@ianbalijawa16/str-man';

console.log(toCamelCase('hello world')); // 'helloWorld'
console.log(toSnakeCase('helloWorld')); // 'hello_world'
console.log(toKebabCase('HelloWorld')); // 'hello-world'
console.log(toPascalCase('hello world')); // 'HelloWorld'
```

### Validations

```typescript
import { isValidEmail, isValidURL, isAlphanumeric } from '@ianbalijawa16/str-man';

console.log(isValidEmail('test@example.com')); // true
console.log(isValidURL('https://example.com')); // true
console.log(isAlphanumeric('Hello123')); // true
```

### String Manipulation

```typescript
import { truncate, padString } from '@ianbalijawa16/str-man';

console.log(truncate('Hello World', 5)); // 'Hello...'
console.log(padString('123', 5)); // '123  '
console.log(padString('123', 5, '0', 'left')); // '00123'
```

## License

MIT
