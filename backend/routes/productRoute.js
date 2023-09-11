const productController = require("../controllers/ProductController");
const AuthMiddlewares = require("../middlewars/AuthMiddleware");
const productRouter = require("express").Router();

productRouter.post(
    "/",
    AuthMiddlewares.isAuthenticatedUser,
    AuthMiddlewares.authorizeRole("Admin"),
    productController.createProduct
);
productRouter.get(
    "/admin/",
    AuthMiddlewares.isAuthenticatedUser,
    AuthMiddlewares.authorizeRole("Admin"),
    productController.getAdminProducts
);
productRouter.get("/", productController.getProducts);
productRouter.get("/:id", productController.getSingleProduct);
productRouter.put(
    "/:id",
    AuthMiddlewares.isAuthenticatedUser,
    AuthMiddlewares.authorizeRole("Admin"),
    productController.updateProduct
);
productRouter.delete(
    "/:id",
    AuthMiddlewares.isAuthenticatedUser,
    AuthMiddlewares.authorizeRole("Admin"),
    productController.deleteProduct
);

module.exports = productRouter;
