import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.createBlogIntoDB(req.body,req.user);

    sendResponse(res, {
        success: true,
        message: 'Blog created successfully',
        statusCode: httpStatus.CREATED,
        data: result
    });
});

const updateBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogServices.updateBlogIntoDB(id, req.body, req.user);
    sendResponse(res, {
        success: true,
        message: 'Blog updated successfully',
        statusCode: httpStatus.OK,
        data: result
    });
});

const deleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogServices.deleteBlogFromDB(id, req.user);
    sendResponse(res, {
        success: true,
        message: 'Blog deleted successfully',
        statusCode: httpStatus.OK,
        data: result
    });
});

const getAllBlogs = catchAsync(async (req, res) => {
    const result = await BlogServices.getAllBlogsFromDB(req?.query);
    sendResponse(res, {
        success: true,
        message: 'Blogs fetched successfully',
        statusCode: httpStatus.OK,
        data: result
    });
});

export const BlogControllers = {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs
};