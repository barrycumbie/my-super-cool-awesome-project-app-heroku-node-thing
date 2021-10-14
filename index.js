const express = require('express');
const app = express();

app.get('/', function (req, res) {

    // res.send('<h3>Hello Node on Heroku</h3><a href="" target="_blank>my repo</a>');
    res.sendFile('/angular.html', { root: __dirname });
});

app.get('/about', function (req, res) {

    res.sendFile('/README.md', { root: __dirname });

});

app.get('/file', function (req, res) {

    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

    fs.appendFile('demofile1.html', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });


});

app.listen(process.env.PORT || 8888, function () {
    console.log('Listening on port 8888');
});