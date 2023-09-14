const { UploadPhotoHelper } = require("../helpers/UploadPhotoHelper");
const ErrorHandler = require("../helpers/ErrorHandlerHelper");

const uploadPhoto = async (image, folder) => {
    if (image?.startsWith("data:image/")) {
        const mimeType = image.substring(5, image.indexOf(";"));

        const allowedMimeTypes = ["image/jpeg", "image/png"];
        if (!allowedMimeTypes.includes(mimeType)) {
            throw new ErrorHandler("unsupported file format", 400);
        }
        //todo resize images before uploading
        const cloudPhoto = await UploadPhotoHelper(image, folder);
        const uploadedPhoto = {
            url: cloudPhoto.secure_url,
            public_id: cloudPhoto.public_id,
        };
        return uploadedPhoto;
    }
};

module.exports = uploadPhoto;
