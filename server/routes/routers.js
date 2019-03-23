const express = require('express');
const router = express.Router();
const Music = require('../models/music')

router.get('',function(req,res){
       Music.find({},function(err,foundMusic){
           res.json(foundMusic)
       })
    });

router.get('/:id',function(req,res){
    const musicId = req.params.id;
        Music.find({},function(err,foundMusic){
            if (err) {
                res.status(422).send({ errors:[{title:'Music Error !',detail:'Could not find Music'}]});
            }
            res.json(foundMusic)
        })
 

});