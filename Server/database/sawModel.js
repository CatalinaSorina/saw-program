const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
	findByUsername,
	add
};

function findById(id) {
	return db('users').where({ id }).first();
}

async function add(user) {
	const [ id ] = await db('users').insert(user);

	return findById(id);
}

function findByUsername(username) {
	return db('users').where({
		username: username
	});
}
