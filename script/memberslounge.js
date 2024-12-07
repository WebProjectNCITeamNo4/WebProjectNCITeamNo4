alert("Hello!,WelCome to Member's Lounge");

function namealert() {
    let userName = prompt("What is your name?");
    if (userName) {
        alert("Hello, " + userName + "! Welcome to Member's Lounge.");
    } else {
        alert("No name entered. Welcome anyway!");
    }
}


document.getElementById("username").addEventListener("click", function() {
    this.style.display = "none"; 
    alert("Click button will disappear, thanks you");
});