const router = require("express").Router();
const { add_user } = require("../controllers/web_development/create_web_user");
const { send_email } = require("../controllers/sendEmail");
const getUser = require("../controllers/web_development/read_web_user");

// route to POST API/ add new user who signs up on web development miniclass
router.post("/web-development/add-user", add_user, send_email);

// route to GET API/read user
router.get("/web-development/read-users", getUser.read_all_users);

// route to read specific user, based on uuid
router.get("/web-development/read-user", getUser.read_a_user);

module.exports = router;