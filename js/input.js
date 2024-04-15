function sendData() {
    var textInput = document.getElementById("textInput").value;
    var outputDiv = document.getElementById("output");

    // AJAX request to send data to proxy server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://linda.rhrk.uni-kl.de:55556/new", true); // Proxy-Server URL
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

    // AJAX request to fetch data from proxy server
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://linda.rhrk.uni-kl.de:55556/history", true); // Proxy-Server URL
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
