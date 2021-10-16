// Importing required Modules
require("dotenv").config();
const { digital_marketing_user } = require("../../models")

module.exports.add_user = async (req, res, next) => {
    try{
        const {
            nama,
            email,
            no_hp,
            jenis_kelamin,
            pekerjaan,
            tempat_kerja,
            kota,
            tanggal_lahir,
            tahu_info,
            tujuan,
            harapan
        } = req.body;

        await digital_marketing_user.create({
            nama,
            email,
            no_hp,
            jenis_kelamin,
            pekerjaan,
            tempat_kerja,
            kota,
            tanggal_lahir,
            tahu_info,
            tujuan,
            harapan
        });
        res.json({
            status: "OK",
            nama,
            email,
            no_hp,
            jenis_kelamin,
            pekerjaan,
            tempat_kerja,
            kota,
            tanggal_lahir,
            tahu_info,
            tujuan,
            harapan
        })
        next();
    } catch(err){
        console.log(err);
        return res
                  .status(500)
                  .json(err);
    }
}