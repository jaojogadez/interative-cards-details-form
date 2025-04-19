/* DESCONTO's items */
const $inputDesconto = document.querySelector("#desconto-input");
const $btnAddDesconto = document.querySelector("#desconto-btn");
const $removeDesconto = document.querySelector("#desconto-remove");
const $realPrice = document.querySelector("#productName p");
const $descontPrice = document.querySelector("#productName span");

$btnAddDesconto.onclick = () => desconto();
$removeDesconto.onclick = () => {
  $inputDesconto.value = "";
  desconto();
};

let desconto = () => {
  if ($inputDesconto.value === "vaiCorinthians10") {
    $realPrice.classList.remove("realPrice");
    $descontPrice.classList.add("descontPrice");
    document.querySelector("#desconto button").textContent = "Cupom aplicado!";
    $btnAddDesconto.classList.add("d-none");
    $removeDesconto.classList.remove("d-none");
  } else {
    document.querySelector("#desconto button").textContent =
      "Tem um cupom de desconto?";
    $realPrice.classList.add("realPrice");
    $descontPrice.classList.remove("descontPrice");
    $btnAddDesconto.classList.remove("d-none");
    $removeDesconto.classList.add("d-none");
  }
};

let disableInput = (input) => {
  input.setAttribute("disabled", true);
};

let clockOver = () => {
  $inputDesconto.value = "";
  desconto();
  disableInput($inputDesconto);
  disableInput($btnAddDesconto);
  document.querySelector("#desconto button").textContent =
    "Não é mais possível adicionar um desconto.";
};

export {clockOver}

document.addEventListener("DOMContentLoaded", desconto())