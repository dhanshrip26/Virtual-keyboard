// all keys
const textField = document.getElementById("text-field");

// sound
const sound = new Audio("https://www.fesliyanstudios.com/play-mp3/387"); // free click sound

document.addEventListener("keydown", function (event) {
  const key = document.getElementById(event.code);
  if (key) {
    key.style.backgroundColor = "#00e5ff";
    key.style.color = "#1e293b";
    key.style.border = "2px solid white";
    key.style.fontSize = "25px";
  }

  // play sound
  if (!event.repeat) { // prevent multiple sound when holding key
    sound.currentTime = 0; // restart sound if key held
    sound.play().catch(() => {}); // avoid promise errors in some browsers

    // typing logic
    if (event.key.length === 1) {
      textField.textContent += event.key; // normal characters
    } else if (event.key === "Backspace") {
      textField.textContent = textField.textContent.slice(0, -1);
    } else if (event.key === "Enter") {
      textField.textContent += "\n";
    }
    // Space is automatically included in event.key.length === 1
  }
});

document.addEventListener("keyup", function (event) {
  const key = document.getElementById(event.code);
  if (key) {
    key.style.backgroundColor = "pink"; // base color
    key.style.color = "black"; // text color
    key.style.border = "none";
    key.style.fontSize = "15px";
  }
});