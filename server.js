const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
