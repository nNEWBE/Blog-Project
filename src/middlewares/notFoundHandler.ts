/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { RequestHandler } from "express";
import httpStatus from "http-status";

const notFoundHandler: RequestHandler = (req, res, next) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "API Not Found ❌",
        error: ""
    })
}

export default notFoundHandler