import { StatusCodes } from "http-status-codes";

class UnauthorizedAPIError extends Error {
    /**
     * Description
     * @param {String} message
     * @param {Number} statusCode
     * @returns {void}
     */
    constructor(message) {
      super(message);
      this.statusCode = StatusCodes.UNAUTHORIZED;
    }
  }
  
  export default UnauthorizedAPIError;
  