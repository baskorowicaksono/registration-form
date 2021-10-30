// Importing required Modules
require("dotenv").config();
const { user } = require("../models")
const _ = require("lodash");
const moment = require("moment");

// Module CREATE
module.exports.add_web_development_user = async (req, res, next) => {
    try{
        const {
            nama,
            email,
            jenis_kelamin,
            pekerjaan,
            media_info,
            tujuan,
            minat
        } = req.body;
        const kota = _.capitalize(req.body.kota);
        const date = req.body.tanggal_lahir;
        const dateSplitted = date.split("/");
        const tanggal_lahir = moment(`${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]}`).format("YYYY-MM-DD");
        const tipeKelas = "Web Development";

        const createdUser = await user.create({
            nama,
            email,
            jenis_kelamin,
            pekerjaan,
            kota,
            tanggal_lahir,
            tipe_kelas : tipeKelas,
            media_info,
            tujuan,
            minat
        });
        res.json({
            status: "OK",
            createdUser
        })
        next();
    } catch(err){
        console.log(err);
        return res
                  .status(500)
                  .json(err);
    }
}

// Module READ
module.exports.read_all_users = async (req, res) => {
    try{
        const users = await user.findAll({
            where: {
                tipe_kelas: "Web Development"
            }
        });
        return res.json(users);
    } catch(err){
        console.log(err);
        return res
                  .status(500)
                  .json(err);
    }
}

module.exports.read_a_user_by_uuid = async (req, res) => {
    try{
        const userId = req.query.userId;
        const user = await user.findAll({
            where: {
                uuid: userId,
                tipe_kelas: "Web Development"
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

module.exports.read_a_user_by_name = async (req, res) => {
    try{
        const nama = req.query.nama;
        const user = await user.findAll({
            where: {
                nama: nama,
                tipe_kelas: "Web Development"
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

// Module UPDATE
module.exports.update_user = async (req, res) => {
    try{
        const userId = req.params.userId;
        const {
            nama,
            email,
            jenis_kelamin,
            pekerjaan,
            media_info,
            tujuan,
            minat
        } = req.body;
        const kota = _.capitalize(req.body.kota);
        const date = req.body.tanggal_lahir;
        const dateSplitted = date.split("/");
        const tanggal_lahir = moment(`${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]}`).format("YYYY-MM-DD");
        
        const savedUser = await user.findOne({
            where: {
                uuid: userId,
                tipe_kelas: "Web Development"
            }
        })
        .then(record => {
            return record.update({
                nama,
                email,
                jenis_kelamin,
                pekerjaan,
                kota,
                tanggal_lahir,
                tipe_kelas: "Web Development",
                media_info,
                tujuan,
                minat
            })
        })
        .then(() => {
            res.sendStatus(200);
        })
        res.send(savedUser)
    } catch(err){
        if(err){
            console.log(err);
            return res.status(500)
                      .json(err);
        }
    }
}

module.exports.soft_delete_user_by_uuid = async (req, res) => {
    try{
        const userId = req.params.userId;
        await user.update({is_deleted: 1}, {
            where: {
                uuid: userId,
                tipe_kelas: "Web Development"
            }
        }).then(() => {
            res.sendStatus(200);
        })
    } catch(err){
        if(err){
            console.log(err);
            return res.status(500)
                      .json(err);
        }
    }
}

module.exports.soft_delete_user_by_name = async (req, res) => {
    try{
        const nama = req.params.nama;
        await user.update({is_deleted: 1}, {
            where: {
                nama: nama,
                tipe_kelas: "Web Development"
            }
        }).then(() => {
            res.sendStatus(200);
        })
    } catch(err){
        if(err){
            console.log(err);
            return res.status(500)
                      .json(err);
        }
    }
}

// Module DELETE
module.exports.delete_all_web_development_users = async (req, res) => {
    try{
        await user.destroy({
            where: {tipe_kelas: "Web Development"},
            force: true
        })
        res.send({
            success: true,
            message: "All Web Development registers successfully deleted"
        })
    } catch(err){
        if(err){
            console.log(err);
            return res.status(500)
                      .json(err)
        }
    }
}

module.exports.delete_specific_web_development_user = async (req, res) => {
    try{
        const userId = req.query.userId;
        const specifiedUser = await user.findOne({
            where: {
                uuid: userId,
                tipe_kelas: "Web Development"
            }
        });
        await specifiedUser.destroy();
        res.send({
            success: true,
            message: "The user has been deleted"
        })
    } catch(err){
        if(err){
            console.log(err);
            return res.status(500)
                      .json(err);
        }
    }
}