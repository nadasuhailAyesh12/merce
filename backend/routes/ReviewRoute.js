const reviewController = require("../controllers/ReviewController");
const { isAuthenticatedUser } = require("../middlewars/AuthMiddleware");

const reviewRouter = require("express").Router();

reviewRouter.put("/", isAuthenticatedUser, reviewController.addProductReview);
reviewRouter.get("/", reviewController.getProductReviews);
reviewRouter.delete("/", reviewController.deleteProductReview);

module.exports = reviewRouter;
