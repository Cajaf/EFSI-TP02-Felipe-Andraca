const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const message2 = document.getElementById("message2")
const attemptsText = document.getElementById("attempts")
const resetBtn = document.getElementById("resetBtn")

let secretNumber = Math.floor(Math.random() * 100)  
let attempts = 0
const intentosAteriores = [];

button.addEventListener("click", checkGuess)
resetBtn.addEventListener("click", reiniciar)
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

function checkGuess(){
  const guess = input.value
  if(attempts < 10){
  if(guess >=0 && guess <= 100 && guess != "")
  {
    attempts += 1;
    intentosAteriores.push(guess)
    message2.innerText = intentosAteriores
    attemptsText.innerText = attempts;
    input.value = "";

    if(guess == secretNumber){
      message.innerText = "¡Ganaste!"
    }

    if(guess < secretNumber){
      message.innerText = "El número es mayor"
    }

    if(guess > secretNumber){
      message.innerText = "El número es menor"
    }
  }
  else
  {
    message.innerText = "numero no valido"
  }
}else{
message.innerText = `perdiste el numero era ${secretNumber}`
}
}

function reiniciar(){
secretNumber = Math.floor(Math.random() * 100);
attempts = 0;
intentosAteriores.length = 0;
attemptsText.innerText = attempts;
message.innerText = ""
message2.innerText = intentosAteriores
}
