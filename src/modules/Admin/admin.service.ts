import { User } from "../User/user.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { Blog } from "../Blog/blog.model";

const blockUserFromDB = async (id: string) => {
    const isUserExist = await User.isUserExistsById(id);
    if (!isUserExist) {
        throw new AppError('user', httpStatus.NOT_FOUND, "User does not exist !!");
    }
    if (isUserExist.isBlocked) {
        throw new AppError('blocked', httpStatus.BAD_REQUEST, "User is already blocked !!");
    }
    if(isUserExist.role === 'admin'){
        throw new AppError('admin', httpStatus.BAD_REQUEST, "Admin cannot be blocked !!");
    }
    const result = await User.findOneAndUpdate(
        { _id: id },
        { $set: { isBlocked: true } },
        { new: true }
    );
    return result;
};

const deleteBlogFromDB = async (id: string) => {
    const isBlogExist = await Blog.findById(id);
    if (!isBlogExist) {
        throw new AppError('blog', httpStatus.NOT_FOUND, "Blog does not exist !!");
    }
    const result = await Blog.findOneAndDelete({ _id: id });
    return result;
};

export const AdminServices = {
    blockUserFromDB,
    deleteBlogFromDB
};