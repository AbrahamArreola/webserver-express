//Imports express module to configure our server
const express = require('express');

//Imports path module to join paths no caring about the OS
const path = require('path');

//Imports hbs module to work with the template engine
const hbs = require('hbs');

const app = express();

//Configures the port to host the server
app.set('port', process.env.PORT || 3000);

//Serves static files
app.use(express.static(path.join(__dirname, "public")));

//Serves partials to render html fragments into another html codes.
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

//Configures the template engine
app.set('view engine', 'hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

//Middlewares
//Renders landing page
app.get('/', (req, res) => {
    res.render('home');
});

//Renders about page
app.get('/about', (req, res) => {
    res.render('about');
});

//Runs the server
app.listen(app.get('port'), () => {
    console.log(`Server running on port: ${app.get('port')}`);
});