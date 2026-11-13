
const express = require("express");

const {
    getHotels,
    addHotel,
    updateHotel,
    deleteHotel
} = require("../controllers/hotelController");

const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", verifyToken, getHotels);

router.post("/", verifyToken, verifyAdmin, addHotel);

router.put("/:id", verifyToken, verifyAdmin, updateHotel);

router.delete("/:id", verifyToken, verifyAdmin, deleteHotel);

module.exports = router;
