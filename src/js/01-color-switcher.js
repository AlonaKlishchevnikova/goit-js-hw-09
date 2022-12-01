
document.querySelector("[data-start]").addEventListener("click", changeColor);
document.querySelector("[data-stop]").addEventListener("click", stopFlashBody);

let nIntervId;

function changeColor() {
  if (!nIntervId) {
    nIntervId = setInterval(flashBody, 1000);
  }
 document.querySelector("[data-start]").setAttribute('disabled', true);
   document.querySelector("[data-stop]").removeAttribute('disabled');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function flashBody() {
 document.querySelector('body').style.background = getRandomHexColor(); 
}

function stopFlashBody() {
  clearInterval(nIntervId);
  nIntervId = null;
   document.querySelector("[data-start]").removeAttribute('disabled');
    document.querySelector("[data-stop]").setAttribute('disabled', true);
}





