var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");

var faceitTeamRouter = require('./routes/faceitTeam');
var faceitTournamentRouter = require('./routes/faceitTournament');
var faceitMatchRouter = require('./routes/faceitMatch');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './frontend/build')));

app.use('/faceit', faceitTeamRouter);
app.use('/tournament', faceitTournamentRouter);
app.use('/match', faceitMatchRouter);
app.get('*', (req,res) =>{
    res.sendFile('index.html', {root: path.join(__dirname, './frontend/build')});
});

module.exports = app;
