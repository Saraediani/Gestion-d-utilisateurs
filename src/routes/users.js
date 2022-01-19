const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    formeUser,
    updateUser
} = require("../controllers/userController");

// router.get("/", allUsers);
router.route("/")
    .get(getUsers)
    .delete(deleteUser)
router.route("/deletUser/:id")
    .get(deleteUser)
router.route("/createUser")
    .get(formeUser)
    .post(createUser)
router.route("/updateUser/:id")
    .get(getUser)
    .get(formeUser)
    .post(updateUser)

module.exports = router;