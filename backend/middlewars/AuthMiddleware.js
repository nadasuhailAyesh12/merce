const AuthHelper = require("../helpers/AuthHelper");
const ErrorHandler = require("../helpers/ErrorHandlerHelper");
const UserRepository = require("../repositories/userRepository");
const catchAsyncErrors = require("./CatchAsyncErrorsMiddleware");

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        throw new ErrorHandler("Login first to access this resource.", 401);
    }

    try {
        const decoded = await AuthHelper.verifyToken(token);
        const { id } = decoded;
        req.user = await UserRepository.getUser({ _id: id });
        next();
    } catch (error) {
        throw new ErrorHandler("Invalid token.", 401);
    }
});

const authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(
                    `Role ${req.user.role} is not allowed to access this resource`,
                    403
                )
            );
        }
        next();
    };
};

const AuthMiddlewares = { isAuthenticatedUser, authorizeRole };
module.exports = AuthMiddlewares;
