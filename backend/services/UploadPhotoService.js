const fs = require("fs");

const { UploadPhotoHelper } = require("../helpers/UploadPhotoHelper");
const ErrorHandler = require("../helpers/ErrorHandlerHelper");

const uploadPhoto = async (image, folder) => {
    if (image) {
        const base64Data = image.replace(/^data:image\/(jpeg|png);base64,/, "");
        const imageBuffer = Buffer.from(base64Data, "base64");
        const jpegSignature = Buffer.from([0xff, 0xd8, 0xff, 0xe0]);
        const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47]);
        const signatureBytes = imageBuffer.slice(
            0,
            Math.max(jpegSignature.length, pngSignature.length)
        );
        // Determine the MIME type based on the signature
        let mimeType;
        if (signatureBytes.equals(jpegSignature)) {
            mimeType = "image/jpeg";
        } else if (signatureBytes.equals(pngSignature)) {
            mimeType = "image/png";
        } else {
            // Handle unrecognized signature
            mimeType = "unknown";
        }
        const allowedMimeTypes = ["image/jpeg", "image/png"];
        if (!allowedMimeTypes.includes(mimeType)) {
            throw new ErrorHandler("unsupported file format", 400);
        }

        const cloudPhoto = await UploadPhotoHelper(image, folder);
        const uploadedPhoto = {
            url: cloudPhoto.secure_url,
            public_id: cloudPhoto.public_id,
        };
        return uploadedPhoto;
    }
};

module.exports = uploadPhoto;
