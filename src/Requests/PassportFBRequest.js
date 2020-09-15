const passport = require('passport');
const fb = require('passport-facebook').Strategy;

const keys = require('../Keys');

function initializeFB() {
	passport.use(
		new fb(
			{
				clientID: keys.fbAppId,
				clientSecret: keys.appSecret,
				callbackURL: 'http://localhost:3000/',
			},
			(accessToken, refreshToken, profile, done) => {
				console.log('accessToken', accessToken, 'refreshToken', refreshToken, 'profile', profile, 'done', done);
			}
		)
	);
}

module.exports = { initializeFB };
