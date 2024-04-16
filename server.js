const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // CORS aktivieren

let texts = [];

app.post('/new', (req, res) => {
    const text = req.body.text;
    texts.push(text);
    res.json({ status: 'success', text: text });
    
    fs.writeFile("besucherlog.json", JSON.stringify(texts), 'utf8', (err) => {
        if (err) {
            console.error('Fehler beim Schreiben der Datei:', err);
            return;
        }
        console.log('Array erfolgreich in die Datei gespeichert.');
    });
});

app.get('/history', (req, res) => {
    fs.readFile("besucherlog.json", 'utf8', (err, data) => {
        if (err) {
            // Bei einem Fehler, rufe die Callback-Funktion mit dem Fehler auf
            console.log("Error beim Laden von besucherlog.json 0")
            return;
        }
        try {
            // Parst den Inhalt der Datei als JSON
            texts = JSON.parse(data);
            // Rufe die Callback-Funktion mit dem geparsten Array auf
            return;
        } catch (parseError) {
            // Bei einem Fehler beim Parsen, rufe die Callback-Funktion mit dem Parsierungsfehler auf
            return;
        }
    });

    res.json({ texts: texts });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
