import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model"
import config from "../../config";
import { createToken } from "./auth.utils";

const regsiterUserIntoDB = async (name: string, email: string, password: string) => {
    const isEmailExist = await User.isUserExistsByEmail(email);
    if (isEmailExist) {
        throw new AppError('email',
            httpStatus.BAD_REQUEST,
            `${email} already exists!`,
        );
    }
    const result = User.create({
        name,
        email,
        password
    })

    return result
}

const loginUserIntoDB = async (email: string, password: string) => {
    const isUserExist = await User.isUserExistsByEmail(email);
    if (!isUserExist) {
        throw new AppError("email", httpStatus.NOT_FOUND, 'User does not exists !!');
    }

    const isPasswordMatched = await User.isPasswordMatched(password, isUserExist.password);
    if (!isPasswordMatched) {
        throw new AppError("password", httpStatus.UNAUTHORIZED, 'Password does not match !!');
    }

    const jwtPayload = {
        userId: isUserExist.email,
        role: isUserExist.role,
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string,
    );


    return {
        token:accessToken,
    }

}

export const authService = {
    regsiterUserIntoDB,
    loginUserIntoDB
}