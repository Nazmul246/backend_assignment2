const express = require("express");
const { createPortfolio, getPortfolios, deletePortfolio, updatePortfolio } = require("../controllers/portfolioController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createPortfolio);
router.get("/", authMiddleware, getPortfolios);
router.put("/:id", authMiddleware, updatePortfolio);
router.delete("/:id", authMiddleware, deletePortfolio);

module.exports = router;
