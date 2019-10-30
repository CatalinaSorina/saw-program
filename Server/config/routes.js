const axios = require('axios');
const bcrypt = require('bcryptjs');

const Users = require('../database/sawModel.js');

const { authenticate } = require('../auth/authenticate');

module.exports = (server) => {
	server.post('/api/login', login);
	server.post('/api/register', register);
};

function login(req, res) {
	let user = req.body;

	if (!user.username && !user.password) {
		res.status(401).json({ message: 'No credentials.' });
	}

	Users.findByUsername(user.username)
		.first()
		.then((userFound) => {
			userFound && bcrypt.compareSync(user.password, userFound.password)
				? res.status(200).json({ message: `Welcome ${userFound.username} !` })
				: res.status(401).json({ message: 'Wrong credentials.' });
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
}

function register(req, res) {
	let user = req.body;

	if (!user.password) {
		return res.status(400).json({ message: 'No password added.' });
	}
	const hashPass = bcrypt.hashSync(user.password, 8);
	user.password = hashPass;

	Users.add(user)
		.then((userAdded) => {
			res.status(201).json(userAdded);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
}
