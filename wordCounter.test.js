// wordCounter.test.js

// Import the necessary testing libraries or frameworks
const { describe, test, expect } = require('your-testing-library');

// Import the function to be tested
const wordCounter = require('../path/to/wordCounter');

// Describe the wordCounter function and its tests
describe('wordCounter', () => {
  test('should return 1 if a passage has just one word', () => {
    const text = 'hello';
    const result = wordCounter(text);
    expect(result).toBe(1);
  });

  test('should return the correct count for a passage with multiple words', () => {
    const text = 'Hello there';
    const result = wordCounter(text);
    expect(result).toBe(2);
  });

  // Add more tests as needed
});
