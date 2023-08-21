const fs = require('fs')

const { UploadPhotoHelper } = require("../helpers/UploadPhotoHelper");

const uploadPhoto = async (files, folder) => {
    if (files) {
        const fileTypes = ["image/jpeg", "image/png", "image/jpg"];

        if (!fileTypes.includes(files.avatar.mimetype)) {
            throw new ErrorHandler("unsupported file format", 400);
        }

        const cloudPhoto = await UploadPhotoHelper(
            files.avatar.tempFilePath,
            folder
        );
        const image = {
            url: cloudPhoto.secure_url,
            public_id: cloudPhoto.public_id,
        };
        fs.unlinkSync(files.avatar.tempFilePath);
        return image;
    }
};

module.exports = uploadPhoto
