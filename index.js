const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const fun = require('./src/Requests/PassportFBRequest');

app.use('/static', express.static(path.join(__dirname, '/src/Views')));
app.set('views', __dirname + '/src/Views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
fun.initializeFB();

app.get('/', (req, res) => {
	res.render('index.jsx', { name: 'Mehul' });
});

app.get('/app', (req, res) => {
	res.send('something happened');
});

app.get('/fb', passport.authenticate('facebook', { scope: ['pages_show_list'] }));

app.listen(3000, () => {
	console.clear();
});
