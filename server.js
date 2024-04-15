const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const httpProxy = require('http-proxy');

const app = express();
const port = 55556; // Ändere den Port auf den gewünschten Wert

app.use(bodyParser.json());
app.use(cors());

// Konfiguriere den Proxy
const proxy = httpProxy.createProxyServer();

// Proxy-Route für POST-Anfragen
app.post('/new', (req, res) => {
    proxy.web(req, res, { target: 'http://localhost:55555' }); // Leite die Anfrage an den Node.js-Server weiter
});

// Proxy-Route für GET-Anfragen
app.get('/history', (req, res) => {
    proxy.web(req, res, { target: 'http://localhost:55555' }); // Leite die Anfrage an den Node.js-Server weiter
});

// Starte den Proxy-Server
app.listen(port, () => {
    console.log(`Proxy-Server läuft auf http://localhost:${port}`);
});
