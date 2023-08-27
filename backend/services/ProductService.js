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

const productService = {
    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
};

module.exports = productService;
