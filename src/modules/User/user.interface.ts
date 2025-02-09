/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface IUser {
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
    isBlocked: boolean;
}


export interface UserModel extends Model<IUser> {
    isUserExistsByEmail(email: string): Promise<IUser>;

    isPasswordMatched(
        plainTextPassword: string,
        hashedPassword: string,
    ): Promise<boolean>;

    isJWTIssuedBeforePasswordChanged(
        passwordChangedTimestamp: Date,
        jwtIssuedTimestamp: number,
    ): boolean;
}