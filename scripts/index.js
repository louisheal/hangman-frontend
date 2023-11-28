function postGuess(event) {
  const letterValue = document.getElementById("letter").value;
  const formData = new FormData();
  formData.append('letter', letterValue);

  fetch("https://hangman-backend-3j7x.onrender.com/guess", {
    method: "POST",
    body: formData
  })
}

async function getStatus() {
  const response = await fetch("https://hangman-backend-3j7x.onrender.com/status");
  const status = await response.json();
  document.getElementById("word").innerHTML = status['word'];
}

getStatus();

document.getElementById("form").addEventListener("submit", postGuess);
