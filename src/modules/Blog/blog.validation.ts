import { z } from "zod";

const createBlogValidationSchema = z.object({
    body: z.object({
        title: z.string({ invalid_type_error: "Title must be a string", required_error: "Title is required" }),
        content: z.string({ invalid_type_error: "Content must be a string", required_error: "Content is required" }),
    })
})

const updateBlogValidationSchema = z.object({
    body:createBlogValidationSchema.shape.body.partial()
})

export const BlogValidationSchema = {
    createBlogValidationSchema,
    updateBlogValidationSchema
}