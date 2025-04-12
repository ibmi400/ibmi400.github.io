const password = prompt("Bitte Passwort eingeben:");
const correctPassword = "piper123";
const image = document.getElementById("secretImage");
const errorMsg = document.getElementById("errorMsg");

if (password === correctPassword) {
    image.style.display = "block";
} else {
    errorMsg.style.display = "block";
}