var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/user');
var invitations = require('./routes/invitation');
var friends = require('./routes/friend');
var tasks = require('./routes/task');
var maladies = require('./routes/maladie');


var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/user', users);
app.use('/invitation', invitations);

app.use('/friend', friends);
app.use('/task', tasks);
app.use('/maladie', maladies);

app.listen(port, function(){
    console.log('Server started on port '+port);
});
