const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent =
    "It works! 🎉 My website is interactive.";
});