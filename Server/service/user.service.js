const exp = require('express');
var userModel = require('../model/user.model');
class Student {

    getList(req, res) {
        console.log(req.params, '---', req.query)

        userModel.find(function(err, user) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            } else {
                res.json({
                    status: "success",
                    message: "user list get successfully",
                    data: user
                });
            }
        });


    }

    async create(req, res) {

        let userData = await userModel.find({ email: req.body.email });

        if (userData && userData.length > 0) {
            res.json({
                status: "error",
                message: 'Email already exist',
            });
        } else {
            let user = new userModel();
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.intro = req.body.intro;
            user.phone = req.body.phone;
            user.experience = req.body.experience;
            user.achievements = req.body.achievements;
            user.save(function(err) {
                if (err) {
                    res.json({
                        status: "error",
                        message: err,
                    });
                } else {
                    res.json({
                        status: "success",
                        message: 'Successfully Created',
                        data: user
                    });
                }
            });
        }

    }

    getByEmail(req, res) {

        userModel.find({ email: req.params.email }, function(err, user) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            } else {
                res.json({
                    status: "success",
                    message: "user list get successfully",
                    data: user
                });
            }
        });
    }
}


module.exports = new Student();