const contadorBloco = document.querySelector
(".contador-bloco");
const contadorActionIniciar = document.querySelector
("#contador-action-iniciar");
const contadorNumeroContent = document.querySelector
(".contador-numero-content");
const contadorNumero = document.querySelector
(".contador-numero");
let count = 1;
let interval = null;

contadorActionIniciar.addEventListener("click", () => {
    setInterval(() => {
        contadorActionIniciar.setAttribute("id", "disable-button");
        executeAnimation();
    }, toMs(0.5));
    
})


function executeAnimation() {
    contadorBloco.classList.add("rotate-bloco");
    contadorNumeroContent.textContent = count;
    count ++;
}

function toMs(secondsValue) {
    return secondsValue * 1000;
}

