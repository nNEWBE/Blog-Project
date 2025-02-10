import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const BlogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    isPublished: { type: Boolean, default: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

export const Blog = model<IBlog>("Blog", BlogSchema);