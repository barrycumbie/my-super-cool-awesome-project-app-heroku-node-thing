const express = require('express');
const app = express();

<<<<<<< HEAD
app.get('/', function (req, res) {

    res.send('<h3>Hello Node on Heroku</h3><a href="" target="_blank>my repo</a>');

});

app.get('/about', function (req, res) {
=======
//using two new libraries
const http = require('http');
const fs = require('fs');

app.get('/', function(req, res) {

    // res.send('<h3>Hello Node on Heroku</h3><a href="https://github.com/barrycumbie/my-super-cool-awesome-project-app-heroku-node-thing" target="_blank">See the code!</a>');
    res.sendFile('/angular.html', { root: __dirname });
});

app.get('/user', function(req, res) {

    res.sendFile('/user.json', { root: __dirname });

});


app.get('/about', function(req, res) {
>>>>>>> 40201977e126e7ce18d04e11fd153709dd320328

    res.sendFile('/README.md', { root: __dirname });

});

app.get('/file', function(req, res) {

    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

    fs.appendFile('demofile1.html', 'Hello content!', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });


});

app.listen(process.env.PORT || 8888, function() {
    console.log('Listening on port 8888');
});