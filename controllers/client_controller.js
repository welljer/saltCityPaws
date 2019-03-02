"use strict";

var express = require('express');
var router = express.Router();
var db = require("../models");



/*==================================EXPRESS ROUTES====================================*/
router.get('/', function (req, res) {
        //retrieve all data from requested walk table
    db.Saunter.findAll({
        include: [db.Temperatures]
        }).then(function (data){
        var hbsObject = {Saunter: data};
        res.render('index', hbsObject);
        }).catch(function (err){
                console.log(err);
        });
});

router.post('/index/create', function (req, res) {
	//create walk request
	db.Saunter.create({
            client_name: req.body.client_name,
            client_phone: req.body.client_phone,
            client_email: req.body.home_address,
            dog_name: req.body.dog_name,
            dog_breed: req.body.dog_breed,
            dog_age: req.body.dog_age
        }).then(function (data) {
            	console.log("added walk");
            res.redirect('/');
        }).catch(function (err){
                console.log(err);
        });
});

router.put('/index/update/:id', function (req, res){
	//update table
	db.Saunter.create({
        client_name: req.body.client_name,
        client_phone: req.body.client_phone,
        client_email: req.body.home_address,
        dog_name: req.body.dog_name,
        dog_breed: req.body.dog_breed,
        dog_age: req.body.dog_age
    }, {
        where: {id: req.params.id}
    }).then(function (data) {
            console.log("Update : " + req.body.temp);
    }).catch(function (err){
            console.log(err);
    });

    db.Saunter.update({
        client_name: req.body.client_name,
        client_phone: req.body.client_phone,
        client_email: req.body.home_address,
        dog_name: req.body.dog_name,
        dog_breed: req.body.dog_breed,
        dog_age: req.body.dog_age
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