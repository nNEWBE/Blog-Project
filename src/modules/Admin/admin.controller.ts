import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";

const blockUser = catchAsync(async (req, res) => {
    const { id } = req.params;
    await AdminServices.blockUserFromDB(id);
    sendResponse(res, {
        success: true,
        message: 'User blocked successfully',
        statusCode: httpStatus.OK,
        data: null
    });
});

const deleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    await AdminServices.deleteBlogFromDB(id);
    sendResponse(res, {
        success: true,
        message: 'Blog deleted successfully',
        statusCode: httpStatus.OK,
        data: null
    });
});


export const AdminController = {
    blockUser,
    deleteBlog
};