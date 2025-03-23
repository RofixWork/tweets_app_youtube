import { StatusCodes } from "http-status-codes";

class NotFoundAPIError extends Error {
    /**
     * Description
     * @param {String} message
     * @param {Number} statusCode
     * @returns {void}
     */
    constructor(message) {
      super(message);
      this.statusCode = StatusCodes.BAD_REQUEST;
    }
  }
  
  export default NotFoundAPIError;
  