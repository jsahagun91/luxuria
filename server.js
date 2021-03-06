const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// var port_number = server.listen(process.env.PORT || 3000);

// Setting up the public directory

app.use('/', express.static('landing-page'));

app.use('/public', express.static('landing-page'));

app.get('/', (req, res) => {
    res.sendFile('./landing-page/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./landing-page/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./landing-page/contact.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));

// app.listen(port_number);

module.exports = app;