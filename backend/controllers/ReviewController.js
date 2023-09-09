const CatchAsyncErrors = require("../middlewars/CatchAsyncErrorsMiddleware");
const productService = require("../services/ProductService");

const addProductReview = CatchAsyncErrors(async (req, res) => {
    const {
        user: { _id, name },
        body: { comment, rating, productID },
    } = req;

    const options = {
        user: _id,
        name: name,
        comment: comment,
        rating: rating,
    };

    const reviews = await productService.addProductReview(options, productID);

    res.status(200).json({
        success: true,
        reviews,
    });
});

const reviewController = {
    addProductReview,
};

module.exports = reviewController;
