const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    deleteUser
} = require("../controllers/userController");

// router.get("/", allUsers);
router.route("/createUser")
    .get(getUsers)
    // .post(saveUser);

module.exports = router;