const fs = require("fs");

const ErrorHandler = require("../helpers/ErrorHandlerHelper");
const {
    destroyPhotoHelper,
} = require("../helpers/UploadPhotoHelper");
const UserRepository = require("../repositories/userRepository");

const getUsers = async () => {
    const users = await UserRepository.getUsers();

    return users;
};

const getSpecifcUser = async (id) => {
    const user = await UserRepository.getUserByID(id);

    if (!user) {
        throw new ErrorHandler("user not found", 404);
    }

    return user;
};

const updateUser = async (id, options) => {
    await getSpecifcUser(id);
    const user = await UserRepository.updateUser(id, options);
    return user;
};

const deleteUser = async (id) => {
    const user = await getSpecifcUser(id);
    const avatar_id = user.avatar.public_id;
    destroyPhotoHelper(avatar_id);
    await UserRepository.deleteUser(id);
};

const UserService = { getUsers, getSpecifcUser, updateUser, deleteUser };
module.exports = UserService;
