function sendData() {
    var textInput = document.getElementById("textInput").value;
    var user = document.getElementById("userInput").value;
    var outputDiv = document.getElementById("output");
    var currentDate = new Date().toLocaleString(undefined, {
        day:    'numeric',
        month:  'numeric',
        year:   'numeric',
        hour:   '2-digit',
        minute: '2-digit',
    });
    if (user == "") {
        user = "Anonymous"
    } else {
        user = "JS ist manchmal etwas schwierig"
    }
    var data = [currentDate,user,textInput]
    

    // AJAX request to send data to server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/new", true); // Hier wird die IP-Adresse und der Port des Servers angegeben
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Server response
            var response = JSON.parse(xhr.responseText);
            let content = response.text[2]
            
            outputDiv.innerHTML += "<div class=\"container\">" + "<div class=\"comment_time\">" + currentDate + "</div>" +"<div class=\"comment_user\">" + user + "</div>" + "<div class=\"comment_content\">" + content + "</div></div>";
        }
    };
    console.log(JSON.stringify({text : data}))
    xhr.send(JSON.stringify({ text: data }));
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
                let time = text[0];
                let user = text[1];
                let content = text[2];
                outputDiv.innerHTML += "<div class=\"container\">" + "<div class=\"comment_time\">" + time + "</div>" + "<div class=\"comment_user\">" + user + "</div>" + " " + content + "</div>";
            });
        }
    };
    xhr.send();
};
