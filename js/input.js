function sendData() {
    var textInput = document.getElementById("textInput").value;
    var outputDiv = document.getElementById("output");

    // AJAX request to send data to server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://131.246.119.67:55555/new", true); // Hier wird die IP-Adresse und der Port des Servers angegeben
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Server response
            var response = JSON.parse(xhr.responseText);
            outputDiv.innerHTML += "<p>" + response.text + "</p>";
        }
    };
    xhr.send(JSON.stringify({ text: textInput }));
}

window.onload = function() {
    var outputDiv = document.getElementById("output");

    // AJAX request to fetch data from server
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://131.246.119.67:55555/history", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Server response
            var response = JSON.parse(xhr.responseText);
            response.texts.forEach(function(text) {
                outputDiv.innerHTML += "<p>" + text + "</p>";
            });
        }
    };
    xhr.send();
};
