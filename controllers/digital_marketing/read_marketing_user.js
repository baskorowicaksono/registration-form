// Importing required Modules
require("dotenv").config();
const { digital_marketing_user } = require("../../models")

module.exports.read_all_users = async (req, res) => {
    try{
        const users = await digital_marketing_user.findAll();
        return res.json(users);
    } catch(err){
        console.log(err);
        return res
                  .status(500)
                  .json(err);
    }
}

module.exports.read_a_user = async (req, res) => {
    try{
        const userId = req.query.userId;
        const user = await digital_marketing_user.findAll({
            where: {
                uuid: userId
            }
        });
        return res.json(user);
    } catch(err) {
        console.log(err);
        return res
                .status(500)
                .json(err)
    }
}