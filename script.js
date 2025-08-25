let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificar() {
    let palpite = document.getElementById("palpite").value;
    let resultado = document.getElementById("resultado");


if (palpite == numeroSecreto) {
    resultado.innerHTML = "🎉🎉🎉Parabéns! Você acertou!🎉🎉🎉";
} else {
     resultado.innerHTML = "❌Errado! Tente novamente!❌";
}
}