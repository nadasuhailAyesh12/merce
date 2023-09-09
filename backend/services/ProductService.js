const fs = require("fs");

const APIFeatures = require("../helpers/APIFeaturesHelper");
const ErrorHandler = require("../helpers/ErrorHandlerHelper");
const { destroyPhotoHelper } = require("../helpers/UploadPhotoHelper");
const productRepository = require("../repositories/ProductRepository");

const createProduct = async (body) => {
    const product = await productRepository.createProduct(body);
    return product;
};

const getProducts = async (requestQuery) => {
    const productsCount = await productRepository.getProducts().count;

    const apiFeatures = new APIFeatures(
        productRepository.getProducts().displayProducts,
        requestQuery
    )
        .search()
        .filter()
        .sort()
        .pagination();

    const products = await apiFeatures.query;
    return { products, productsCount };
};

const getSingleProduct = async (id) => {
    const product = await productRepository.getSingleProduct(id);
    if (!product) {
        throw new ErrorHandler("product not found", 404);
    }
    return product;
};

const updateProduct = async (id, options) => {
    await getSingleProduct(id);
    const product = await productRepository.updateProduct(id, options);
    return product;
};

const deleteProduct = async (id) => {
    const product = await getSingleProduct(id);
    const image_id = product.image.public_id;
    destroyPhotoHelper(image_id);
    await productRepository.deleteProduct(id);
};

const addProductReview = async (options, productID) => {
    const product = await getSingleProduct(productID);

    const hasReviewed = product.reviews.find(
        (review) => review.user.toString() === options.user.toString()
    );

    if (!hasReviewed) {
        product.reviews.push({
            ...options,
        });
    } else {
        product.reviews = product.reviews.map((review) =>
            review.user.toString() === options.user.toString()
                ? { ...review, comment: options.comment, rating: options.rating }
                : review
        );
    }

    product.rating =
        product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length;
    product.numOfReviews = product.reviews.length;

    await product.save({ validateBeforeSave: false });
    return product.reviews;
};

const getProductReviews = async (productID) => {
    const product = await getSingleProduct(productID);
    return product.reviews;
};

const productService = {
    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    addProductReview,
    getProductReviews,
};

module.exports = productService;
