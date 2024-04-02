const currentTempBTN = document.getElementById('curr');
const tempMenu = document.getElementById('tempSelect');
const celsiusBTN = document.getElementById('Cel');
const kelvinBTN = document.getElementById('Kev');
const fahrenheitBTN = document.getElementById('Fah');

currentTempBTN.onclick = function (){
  tempMenu.classList.toggle('hidden')
}

celsiusBTN.addEventListener('click', function(){
  currentTempBTN.innerText = celsiusBTN.innerText
  tempMenu.classList.toggle('hidden')
})
kelvinBTN.addEventListener('click', function(){
  currentTempBTN.innerText = kelvinBTN.innerText
  tempMenu.classList.toggle('hidden')
})
fahrenheitBTN.addEventListener('click', function(){
  currentTempBTN.innerText = fahrenheitBTN.innerText
  tempMenu.classList.toggle('hidden')
})