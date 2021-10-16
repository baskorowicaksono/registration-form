const router = require("express").Router();
const { add_user } = require("../controllers/digital_marketing/create_marketing_user");
const { send_email } = require("../controllers/sendEmail");
const getUser = require("../controllers/digital_marketing/read_marketing_user");

// route to POST API/ add new user who signs up on digital marketing miniclass
router.post("/digital-marketing/add-user", add_user, send_email);

// route to GET API/read user
router.get("/digital-marketing/read-users", getUser.read_all_users);

// route to read specific user, based on uuid
router.get("/digital-marketing/read-user", getUser.read_a_user);

module.exports = router;