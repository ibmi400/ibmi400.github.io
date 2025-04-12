const password = prompt("Enter password:");
const correctPassword = "april18";
const image = document.getElementById("secretImage");
const errorMsg = document.getElementById("errorMsg");

if (password === correctPassword) {
    image.style.display = "block";
} else {
    errorMsg.style.display = "block";
}