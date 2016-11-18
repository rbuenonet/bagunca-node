var express = require('express');

var url = require('url')
var fs = require('fs')
var path = require('path')

var app = express();

app.get('/api', function (req, res) {
	res.send('Hello World!');
});

app.get('/api/teste', function(req, res){
	res.send('this is my teste and I got it \o/');
});

app.get('*',function(req, res){

	var caminho = url.parse(req.url).pathname;

	caminho = caminho.replace(/.teste1/g, '')
	caminho = caminho.replace(/api/g, '')


	if (caminho==='/') {
		var ficheiro = path.join(__dirname, 'public', caminho, 'index.html');
	} else {
		var ficheiro = path.join(__dirname, 'public', caminho);
	}

	console.log(ficheiro)

	fs.readFile(ficheiro, function (erro, dados) {
		if (erro) {
			res.writeHead(404);
			res.end();
		} else {
			res.end(dados);
		}
	})

})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
