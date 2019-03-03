"use strict";

var express = require('express');
var router = express.Router();
var db = require("../models");



/*==================================EXPRESS ROUTES====================================*/
router.get('/', function (req, res){
	//retrieve all data from requested walk table
    db.human.findAll({
        include: [db.human]
        }).then(function (data){
        var hbsObject = {dog: data};
        res.render('index', hbsObject);
        }).catch(function (err){
                console.log(err);
        });
});

router.post('/index/create', function (req, res) {
	//create walker request
	db.human.create({
        human_name: req.body.human_name,
        human_phone: req.body.human_phone,
        human_email: req.body.human_email,
        }).then(function (data) {
            	console.log("added walker");
            res.redirect('/');
        }).catch(function (err){
                console.log(err);
        });
});

router.put('/index/update/:id', function (req, res){
	//update table
	db.human.create({
        human_name: req.body.human_name,
        human_phone: req.body.human_phone,
        human_email: req.body.human_email,
    }, {
        where: {id: req.params.id}
    }).then(function (data) {
            console.log("Update : " + req.body.human);
    }).catch(function (err){
            console.log(err);
    });

    db.human.update({
        human_name: req.body.human_name,
        human_phone: req.body.human_phone,
        human_email: req.body.human_email,
    },
    {
    where: {id: req.params.id}
    }).then(function (data){
    res.redirect('/');
    }).catch(function (err){
            console.log(err);
    });

});

/*==================================END EXPRESS ROUTES====================================*/


//export router to be required in server.js
module.exports = router;