
// Program for generate random number
const displayResult = document.getElementById('result');
let generateBtn = document.getElementById("btn");


generateBtn.addEventListener("click", () => {
  let num = Math.floor(Math.random() * 50);
  document.getElementById("info").innerText = num;
}); 
