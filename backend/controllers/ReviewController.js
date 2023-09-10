const CatchAsyncErrors = require("../middlewars/CatchAsyncErrorsMiddleware");
const productService = require("../services/ProductService");

const addProductReview = CatchAsyncErrors(async (req, res) => {
    const {
        user: { _id, name },
        body: { comment, rating },
        params: { id },
    } = req;

    const options = {
        user: _id,
        name: name,
        comment: comment,
        rating: rating,
    };

    const reviews = await productService.addProductReview(options, id);

    res.status(200).json({
        success: true,
        reviews,
    });
});

const getProductReviews = CatchAsyncErrors(async (req, res) => {
    const { id } = req.params;

    const reviews = await productService.getProductReviews(id);

    res.status(200).json({
        success: true,
        reviews,
    });
});

const deleteProductReview = CatchAsyncErrors(async (req, res) => {
    const { id, productID } = req.query;

    const reviews = await productService.deleteProductReview(productID, id);

    res.status(200).json({
        success: true,
        reviews,
    });
});

const reviewController = {
    addProductReview,
    getProductReviews,
    deleteProductReview,
};

module.exports = reviewController;
