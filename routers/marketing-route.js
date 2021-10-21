const router = require("express").Router();
const { send_email } = require("../controllers/sendEmail");
const controller = require("../controllers/digital_marketing_controller")

// route to POST API/ add new user who signs up on digital marketing miniclass
router.post("/digital-marketing/add-user", controller.add_digital_marketing_user, send_email);

// route to GET API/read user
router.get("/digital-marketing/read-users", controller.read_all_users);

// route to read specific user, based on uuid
router.get("/digital-marketing/read-user-by-id", controller.read_a_user_by_uuid);

// route to read specific user, based on the name
router.get("/digital-marketing/read-user-by-name", controller.read_a_user_by_name)

// route to update user info
router.put("/digital-marketing/update-user", controller.update_user);

// route to delete all web development registers
router.delete("/digital-marketing/delete-all-users", controller.delete_all_digital_marketing_users)

// route to delete web development user by their uuid
router.delete("/digital-marketing/delete-user", controller.delete_specific_digital_marketing_user)

module.exports = router;