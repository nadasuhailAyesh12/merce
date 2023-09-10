const reviewController = require("../controllers/ReviewController");
const { isAuthenticatedUser } = require("../middlewars/AuthMiddleware");

const reviewRouter = require("express").Router();

reviewRouter.put("/:id", isAuthenticatedUser, reviewController.addProductReview);
reviewRouter.get("/:id", reviewController.getProductReviews);
reviewRouter.delete("/", reviewController.deleteProductReview);

module.exports = reviewRouter;
