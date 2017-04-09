const express = require('express');
const router = express.Router();

// declare mongojs for making http requests
var mongojs = require('mongojs');
var db = mongojs('mongodb://WalidMa:rosenoire@ds119618.mlab.com:19618/my_filapp_database', ['tasks']);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

// Get Single Task
router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.title || !(task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

// Delete Task
router.delete('/task/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

// Update Task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};
    
    if(task.pseudo){
        updTask.pseudo = task.pseudo;
    }
    
    if(task.adresse){
        updTask.adresse = task.adresse;
    }
	
    if(task.mobile){
        updTask.mobile = task.mobile;
    }
	
	if(task.email){
        updTask.email = task.email;
    }
	
	if(task.type_pathologie){
        updTask.type_pathologie = task.type_pathologie;
    }
		
	if(task.naissance){
        updTask.naissance = task.naissance;
    }
		
	if(task.hopital){
        updTask.hopital = task.hopital;
    }
		
	if(task.medecin){
        updTask.medecin = task.medecin;
    }
		
	if(task.nom_contact_urgence){
        updTask.nom_contact_urgence = task.nom_contact_urgence;
    }
	
	if(task.maladie_id){
        updTask.maladie_id = task.maladie_id;
    }
	
	if(task.hospitalisation){
        updTask.hospitalisation = task.hospitalisation;
    }
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.tasks.update({_id: req.params.id},updTask, {}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    }
});

module.exports = router;