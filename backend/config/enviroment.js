const dotenv = require("dotenv");

dotenv.config({});

const {
    DEVELOPMENT_DATABASE_URL,
    TEST_DATABASE_URL,
    PRODUCTION_DATABASE_URL,
    PORT,
    NODE_ENV,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_SECRET_KEY,
    JSONWEBTOKEN_SECRET_KEY,
    COOKIE_EXPIRES_TIME,
    MAIL_USER,
    MAIL_PASSWORD,
    MAIL_FROM_NAME,
    MAIL_HOST,
    MAIL_PORT,
    STRIPE_SECRET_KEY,
    FRONTEND_URL,
} = process.env;

const config = {
    database: {
        uri:
            NODE_ENV === "development"
                ? DEVELOPMENT_DATABASE_URL
                : NODE_ENV === "test"
                    ? TEST_DATABASE_URL
                    : PRODUCTION_DATABASE_URL,
    },
    port: PORT || 5000,
    node_env: NODE_ENV,
    cloudinaryConfig: {
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_SECRET_KEY,
        secure: true,
    },
    JsonWebTokenConfig: {
        secret_key: JSONWEBTOKEN_SECRET_KEY || "nada",
    },
    cookieConfig: {
        expiresTime: COOKIE_EXPIRES_TIME,
    },
    nodemailerConfig: {
        user: MAIL_USER,
        password: MAIL_PASSWORD,
        name: MAIL_FROM_NAME,
        host: MAIL_HOST,
        port: MAIL_PORT,
    },
    frontendURL: FRONTEND_URL,
    // stripeConfig: {
    //     api_secret: STRIPE_SECRET_KEY,
    //     api_key: STRIPE_API_KEY,
    // },
};

module.exports = config;
