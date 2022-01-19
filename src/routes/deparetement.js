const express = require("express");
const router = express.Router();
const {
    getDeparetements,
    getDeparetement,
    createDeparetement,
    deleteDeparetement,

    updateDeparetement
} = require("../controllers/deparetementController");

// router.get("/", allde^ps);
router.route("/")
    .get(getDeparetements)
    .delete(deleteDeparetement)
router.route("/deletDeparetement/:id")
    .get(deleteDeparetement)
router.route("/createDeparetement")
    .post(createDeparetement)
router.route("/updateDeparetement/:id")
    .get(getDeparetement)
    .post(updateDeparetement)

module.exports = router;