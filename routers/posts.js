const express = require("express");
const router = express.Router();

const postsController = require("../controllers/postsController");

// INDEX
router.get("/", postsController.index);

// SHOW
router.get("/:id", postsController.show);

// CREATE
router.post("/", postsController.store);

// UPDATE
router.put("/:id", postsController.update);

// MODIFY
router.patch("/:id", postsController.modify);

// DELETE
router.delete("/:id", postsController.destroy);

module.exports = router;