var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')


http.createServer(function (pedido, resposta) {

console.log(pedido)
resposta.end();
    var caminho = url.parse(pedido.url).pathname;

    if (caminho==='/') {
        console.log(pedido)
        var ficheiro = path.join(__dirname, 'public', caminho, 'index.html');
    } else {
        var ficheiro = path.join(__dirname, 'public', caminho);
    }

    fs.readFile(ficheiro, function (erro, dados) {
        if (erro) {
            resposta.writeHead(404);
            resposta.end();
        } else {
            resposta.end(dados);
        }
    })

}).listen(3000, 'localhost', function () {
    console.log('--- O servidor arrancou –--');
});
