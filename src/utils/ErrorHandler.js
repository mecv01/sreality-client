const debug = require('debug')('api-client:ErrorHandler');

const errorAndDebug = (errorCode, errorMessage) => {
  if (!errorMessage || !errorCode) {
    debug('Error code/message was not provided!');
    throw new Error('Error code/message was not provided!');
  }
  debug(errorCode, errorMessage);
  const myCustomError = new Error(errorMessage);
  myCustomError.code = errorCode;
  return myCustomError;
};

module.exports = {
  errorAndDebug,
};
