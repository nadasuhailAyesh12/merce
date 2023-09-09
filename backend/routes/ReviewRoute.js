const reviewController = require("../controllers/ReviewController");
const { isAuthenticatedUser } = require("../middlewars/AuthMiddleware");

const reviewRouter = require("express").Router();

reviewRouter.put("/", isAuthenticatedUser, reviewController.addProductReview);
reviewRouter.get("/:id", reviewController.getProductReviews);

module.exports = reviewRouter;
