import { Types } from "mongoose";
import { User } from "../User/user.model";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { JwtPayload } from "jsonwebtoken";
import { Blog } from "./blog.model";

export const checkBlogOwnership = async (userId: Types.ObjectId, user: JwtPayload) => {
    const isAuthorExist = await User.isUserExistsById(userId);
    if (!isAuthorExist) {
        throw new AppError("author", httpStatus.NOT_FOUND, 'Author does not exists !!');
    }

    if (isAuthorExist.email !== user.userId) {
        throw new AppError("Unauthorized", httpStatus.UNAUTHORIZED, 'You are not authorized !!');
    }
}

export const checkBlogExist = async (blogId: string) => {
    const isBlogExist = await Blog.findById(blogId);
    if (!isBlogExist) {
        throw new AppError("Blog", httpStatus.NOT_FOUND, 'Blog does not exists !!');
    }
    return isBlogExist
}