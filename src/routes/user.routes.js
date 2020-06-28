const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware } = require("../middlewares");

module.exports = function ({ UserController }) {
    const router = Router();

    router.get("", [AuthMiddleware, ParseIntMiddleware], UserController.getAll);
    router.get("/:userId", UserController.get);
    router.patch("/:userId", AuthMiddleware, UserController.update);
    router.delete("/:userId", AuthMiddleware, UserController.delete);
    
    return router;
};