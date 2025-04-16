import {
  inputDesconto,
  btnAddDesconto,
  removeDesconto,
  realPrice,
  descontPrice,
} from "./dom-elements";

export function initDiscountHandler() {
  btnAddDesconto.onclick = applyDiscount;
  removeDesconto.onclick = removeDiscount;
}

export function applyDiscount() {
  if (inputDesconto.value === "vaiCorinthians10") {
    realPrice.classList.remove("realPrice");
    descontPrice.classList.add("descontPrice");
    document.querySelector("#desconto button").textContent = "Cupom aplicado!";
    btnAddDesconto.classList.add("d-none");
    removeDesconto.classList.remove("d-none");
  }
}

export function removeDiscount() {
  inputDesconto.value = "";
  document.querySelector("#desconto button").textContent =
    "Tem um cupom de desconto?";
  realPrice.classList.add("realPrice");
  descontPrice.classList.remove("descontPrice");
  btnAddDesconto.classList.remove("d-none");
  removeDesconto.classList.add("d-none");
}

export function disableDiscount() {
  inputDesconto.value = "";
  inputDesconto.setAttribute("disabled", true);
  btnAddDesconto.setAttribute("disabled", true);
  document.querySelector("#desconto button").textContent =
    "Não é mais possível adicionar um desconto.";
}
