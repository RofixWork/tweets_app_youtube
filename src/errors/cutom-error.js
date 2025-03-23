class CustomAPIError extends Error {
  /**
   * Description
   * @param {String} message
   * @param {Number} statusCode
   * @returns {void}
   */
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default CustomAPIError;
