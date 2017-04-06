var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://WalidMa:rosenoire@ds119618.mlab.com:19618/my_filapp_database');

router.get('/:id', function(req, res, next){
    db.user.findOne({_id: req.params.id},{_id:0,maladie_id:1},function(err, tasks){
        db.maladie.findOne({_id:tasks.maladie_id},function(err,tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
        });
    });
});

module.exports = router;