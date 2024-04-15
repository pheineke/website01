const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 55555;

app.use(bodyParser.json());
app.use(cors());

let texts = [];

app.post('/new', (req, res) => {
    const text = req.body.text;
    texts.push(text);
    res.json({ status: 'success', text: text });
});

app.get('/history', (req, res) => {
    res.json({ texts: texts });
});

// Lade das SSL-Zertifikat und den privaten Schlüssel
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

// Erstelle den HTTPS-Server
https.createServer(options, app).listen(port, () => {
    console.log(`Server läuft auf https://linda.rhrk.uni-kl.de:${port}`);
});
