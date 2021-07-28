const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const factsetData = require('./factsetData');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());

app.post('/content/factset-prices/v1/prices', (req, res) => {
	let body = req.body;
	console.log(body);
	if (!body || !body.ids || !body.ids.length) {
		return send(res, 400, 'ids required');
	}
	send(res, 200, factsetData.random());
});

server.listen('3030', () => {
	console.log('listening on *:3030');
});

function send(res, code, msg) {
	return res.status(code).send({
		data: msg,
	});
}