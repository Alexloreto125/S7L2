function clearInput() {
  document.getElementById("name").value = "";
}

function salvaValore() {
  const nomeInput = document.getElementById("name").value;
  const userData = {
    nome: nomeInput,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
  mostraValoreSalvato();
  clearInput();
}
function rimuoviValore() {
  localStorage.removeItem("userData");
  mostraValoreSalvato();
  clearInput();
}

function mostraValoreSalvato() {
  const valoreSalvato = localStorage.getItem("userData");
  const elementoVisualizzazione = document.getElementById("savedValue");

  if (valoreSalvato) {
    const userData = JSON.parse(valoreSalvato);
    elementoVisualizzazione.innerHTML = "Valore salvato: " + userData.nome;
  } else {
    elementoVisualizzazione.innerHTML = "Nessun valore salvato.";
  }
}

mostraValoreSalvato();

function updateCounter() {
  let counterValueElement = document.getElementById("counterValue");
  let counter = sessionStorage.getItem("counter") || 0;

  counter = parseInt(counter, 10) + 1;
  sessionStorage.setItem("counter", counter);

  counterValueElement.innerHTML = counter;
}

setInterval(updateCounter, 1000);
