const router = require("express").Router();
const { send_email } = require("../controllers/sendEmail");
const controller = require("../controllers/graphic_design_controller");

// route to POST API/ add new user who signs up on digital marketing miniclass
router.post("/graphic-design/add-user", controller.add_graphic_design_user, send_email);

// route to GET API/read user
router.get("/graphic-design/read-users", controller.read_all_users);

// route to read specific user, based on uuid
router.get("/graphic-design/read-user-by-id", controller.read_a_user_by_uuid);

// route to read specific user, based on the name
router.get("/graphic-design/read-user-by-name", controller.read_a_user_by_name)

// route to update user info
router.put("/graphic-design/update-user", controller.update_user);

// route to delete all web development registers
router.delete("/graphic-design/delete-all-users", controller.delete_all_graphic_design_users)

// route to delete web development user by their uuid
router.delete("/graphic-design/delete-user", controller.delete_specific_graphic_design_user)


module.exports = router;