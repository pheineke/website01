function sendData() {
    var textInput = document.getElementById("textInput").value;
    var outputDiv = document.getElementById("output");

    // AJAX request to send data to server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/new", true); // Hier wird die IP-Adresse und der Port des Servers angegeben
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Server response
            var response = JSON.parse(xhr.responseText);
            var currentDate = new Date().toLocaleString(undefined, {
                day:    'numeric',
                month:  'numeric',
                year:   'numeric',
                hour:   '2-digit',
                minute: '2-digit',
            });;
            
            outputDiv.innerHTML += "<div class=\"container\">" + "<div class=\"comment_time\">" + currentDate + "</div" + response.text + "</div>";
        }
    };
    xhr.send(JSON.stringify({ text: textInput }));
}

window.onload = function() {
    var outputDiv = document.getElementById("output");

    // AJAX request to fetch data from server
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/history", true); // Hier wird die IP-Adresse und der Port des Servers angegeben
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Server response
            var response = JSON.parse(xhr.responseText);
            response.texts.forEach(function(text) {
                outputDiv.innerHTML += "<div class=\"container\">" + text + "</div>";
            });
        }
    };
    xhr.send();
};
