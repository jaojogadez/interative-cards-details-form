import { clock } from "./dom-elements.js";
import { disableDiscount } from "./discount-handler.js";

let tempoRestante = 11 * 60000;
let intervalo;
let ultimoTempo = Date.now();

export function initTimer() {
  intervalo = setInterval(atualizarTempo, 10);
  atualizarTempo();
}

function atualizarTempo() {
  let tempoAgora = Date.now();
  let tempoDecorrido = tempoAgora - ultimoTempo;
  ultimoTempo = tempoAgora;

  tempoRestante -= tempoDecorrido;

  let minutos = Math.floor(tempoRestante / 60000);
  let segundos = Math.floor((tempoRestante % 60000) / 1000);
  let milisegundos = tempoRestante % 1000;

  minutos = minutos < 10 ? `0${minutos}` : minutos;
  segundos = segundos < 10 ? `0${segundos}` : segundos;
  milisegundos =
    milisegundos < 100
      ? `0${milisegundos}`
      : milisegundos < 10
      ? `00${milisegundos}`
      : milisegundos;

  clock.textContent = `${minutos}:${segundos}:${milisegundos}`;

  if (tempoRestante <= 0) {
    clock.textContent = "O tempo acabou!";
    clearInterval(intervalo);
    disableDiscount();
  }
}
