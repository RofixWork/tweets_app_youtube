import { StatusCodes } from "http-status-codes";

class ConflictAPIError extends Error {
    /**
     * Description
     * @param {String} message
     * @param {Number} statusCode
     * @returns {void}
     */
    constructor(message) {
      super(message);
      this.statusCode = StatusCodes.CONFLICT;
    }
  }
  
  export default ConflictAPIError;
  