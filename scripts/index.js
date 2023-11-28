function postGuess(event) {
  const letterValue = document.getElementById("letter").value;
  const formData = new FormData();
  formData.append('letter', letterValue);

  fetch("http://localhost:5000/guess", {
    method: "POST",
    body: formData
  })
}

async function getStatus() {
  const response = await fetch("http://localhost:5000/status");
  const status = await response.json();
  document.getElementById("word").innerHTML = status['word'];
}

getStatus();

document.getElementById("form").addEventListener("submit", postGuess);
