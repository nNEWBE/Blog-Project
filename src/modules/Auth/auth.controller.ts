import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { authService } from "./auth.service";

const registerUser = catchAsync(async (req, res) => {
    const { name, email, password } = req.body;
    const result = await authService.regsiterUserIntoDB(name, email, password);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'User registered successfully',
        data: {
            _id: result._id,
            name: result.name,
            email: result.email
        },
    });
});

const loginUser = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const result = await authService.loginUserIntoDB(email, password);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Login successful',
        data: result
    });
})

export const AuthController = {
    registerUser,
    loginUser
};