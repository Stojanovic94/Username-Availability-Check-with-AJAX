document.getElementById("username-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let statusElement = document.getElementById("username-status");

    if (username.length === 0) {
        statusElement.textContent = "Molimo unesite korisničko ime.";
        statusElement.style.color = "red";
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "check_username.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.responseText;
            if (response == "available") {
                statusElement.textContent = "Korisničko ime je dostupno!";
                statusElement.style.color = "green";
            } else {
                statusElement.textContent = "Korisničko ime nije dostupno.";
                statusElement.style.color = "red";
            }
        }
    };

    xhr.send("username=" + encodeURIComponent(username));
});
