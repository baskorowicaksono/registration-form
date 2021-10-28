const router = require("express").Router();
const { send_email } = require("../controllers/sendEmail");
const controller = require("../controllers/web_development_controller");

// route to POST API/ add new user who signs up on web development miniclass
router.post("/web-development/add-user", controller.add_web_development_user, send_email);

// route to GET API/read user
router.get("/web-development/read-users", controller.read_all_users);

// route to read specific user, based on uuid
router.get("/web-development/read-user-by-id", controller.read_a_user_by_uuid);

// route to read specific user, based on the name
router.get("/web-development/read-user-by-name", controller.read_a_user_by_name)

// route to update user info
router.put("/web-development/update-user", controller.update_user);

// route to soft delete user record

// by uuid
router.patch("/web-development/soft-delete-user-by-id", controller.soft_delete_user_by_uuid)

// by name
router.patch("/web-development/soft-delete-user-by-name", controller.soft_delete_user_by_name)

// route to delete all web development registers
router.delete("/web-development/delete-all-users", controller.delete_all_web_development_users)

// route to delete web development user by their uuid
router.delete("/web-development/delete-user", controller.delete_specific_web_development_user)



module.exports = router;