const productController = require("../controllers/ProductController");
const AuthMiddlewares = require("../middlewars/AuthMiddleware");
const productRouter = require("express").Router();

productRouter.post(
    "/admin",
    AuthMiddlewares.isAuthenticatedUser,
    AuthMiddlewares.authorizeRole("Admin"),
    productController.createProduct
);
productRouter.get(
    "/admin",
    AuthMiddlewares.isAuthenticatedUser,
    AuthMiddlewares.authorizeRole("Admin"),
    productController.getAdminProducts
);
productRouter.get("/:id", productController.getSingleProduct);
productRouter.get("/", productController.getProducts);
productRouter.put(
    "/:id",
    AuthMiddlewares.isAuthenticatedUser,
    AuthMiddlewares.authorizeRole("Admin"),
    productController.updateProduct
);
productRouter.delete(
    "/admin/:id",
    AuthMiddlewares.isAuthenticatedUser,
    AuthMiddlewares.authorizeRole("Admin"),
    productController.deleteProduct
);

module.exports = productRouter;
