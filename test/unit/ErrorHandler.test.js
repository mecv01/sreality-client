const { errorAndDebug } = require('../../src/utils/ErroHandler');

test('should return an error object with given properties', () => {
  const message = 'xxx';
  const code = 'yyy'
  const errorObject = errorAndDebug(code, message);
  expect(errorObject.message).toBe(message);
  expect(errorObject.code).toBe(code);
  expect(errorObject).toBeInstanceOf(Error);
});

test('should return an error for an empty message', () => {
  const message = undefined;
  const code = 'yyy'

  function myError() {
    errorAndDebug(code, message)
  }

  expect(myError).toThrowError('Error code/message was not provided!');

});

test('should return an error for an empty code', () => {
  const message = 'xxx';
  const code = undefined

  function myError() {
    errorAndDebug(code, message)
  }

  expect(myError).toThrowError('Error code/message was not provided!');

});

test('should return an error for an empty code', () => {
  const message = undefined;
  const code = undefined

  function myError() {
    errorAndDebug(code, message)
  }

  expect(myError).toThrowError('Error code/message was not provided!');

});
