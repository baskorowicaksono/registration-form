const router = require("express").Router();
const { add_user } = require("../controllers/graphic_design/create_design_user");
const { send_email } = require("../controllers/sendEmail");
const getUser = require("../controllers/graphic_design/read_design_user");

// route to POST API/ add new user who signs up on digital marketing miniclass
router.post("/graphic-design/add-user", add_user, send_email);

// route to GET API/read user
router.get("/graphic-design/read-users", getUser.read_all_users);

// route to read specific user, based on uuid
router.get("/graphic-design/read-user", getUser.read_a_user);

module.exports = router;