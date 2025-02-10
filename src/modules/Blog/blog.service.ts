import { JwtPayload } from "jsonwebtoken";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import { checkBlogExist, checkBlogOwnership } from "./blog.utils";
import QueryBuilder from "../../builder/QueryBuilder";

const createBlogIntoDB = async (payload: IBlog, user: JwtPayload) => {
    await checkBlogOwnership(payload.author, user);
    const result = (await Blog.create(payload)).populate("author");
    return result;
}

const updateBlogIntoDB = async (id: string, payload: Partial<IBlog>, user: JwtPayload) => {
    const blog = await checkBlogExist(id);
    await checkBlogOwnership(blog.author, user);
    const result = await Blog.findByIdAndUpdate(id, payload, { new: true }).populate("author");
    return result
}

const deleteBlogFromDB = async (id: string, user: JwtPayload) => {
    const blog = await checkBlogExist(id);
    await checkBlogOwnership(blog.author, user);
    await Blog.findByIdAndDelete(id);
    return null
}

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
    const blogQuery = new QueryBuilder(Blog.find().populate("author")
     ,query)
     .search(['title', 'content'])
     .sort()
     .filter()
     .paginate()
     .fields();
    const result = await blogQuery.modelQuery;
    return result
}
export const BlogServices = {
    createBlogIntoDB,
    updateBlogIntoDB,
    deleteBlogFromDB,
    getAllBlogsFromDB
}