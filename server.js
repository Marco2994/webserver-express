// APP SERVER //

var express = require('express');
var app = express();

var hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Express Hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    //res.send('Hola Mundo');
    res.render('home', {
        nombre: 'Marco!'
    });

});

app.get('/about', function(req, res) {
    //res.send('Hola Mundo');
    res.render('about', {
        anio: new Date().getFullYear()
    });


});


app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});