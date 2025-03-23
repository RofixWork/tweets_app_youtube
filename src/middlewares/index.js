import {StatusCodes} from 'http-status-codes'
/**
 * @class
 * Middlewares
 */

class Middleware {
      /**
     * @static
     * Error Handler Middleware
     * @param {Error} error
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     * @returns {import("express").Response}
     */
    static errorHandler(error, request, response, next) {
        const customAPIError = {
            success: false,
            message: error.message || 'Something went wrong...',
            timestamp: new Date().toISOString()
        }

        return response.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(customAPIError)
    }
    /**
     * @static
     * Not Found Middleware
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     * @returns {import("express").Response}
     */
    static notFound(request, response, next) {
        return response.status(StatusCodes.NOT_FOUND).json({
            success: false,
            message: `Route <${request.url}> Not Found (404)`,
            timestamp: new Date().toISOString()
        })
    }
}

export default Middleware;