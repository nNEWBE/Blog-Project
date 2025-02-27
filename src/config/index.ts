import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path:path.join(process.cwd(),'.env')})
export default {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
    database_url: process.env.DATABASE_URL,
    default_password: process.env.DEFAULT_PASSWORD,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
};
