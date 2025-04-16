// Exporta todos os elementos DOM como constantes nomeadas
export const formComplete = document.getElementById("form-complete");
export const productContainer = document.getElementById("productContainer");
export const form = document.querySelector("form");
export const inputs = document.querySelectorAll("form input, form select");

// Formulário de informações pessoais
export const nameInput = document.querySelector("#name-input");
export const cpfInput = document.querySelector("#cpf");
export const telInput = document.querySelector("#tel");
export const cepInput = document.querySelector("#cep");
export const addressInput = document.querySelector("#address");
export const addressNumberInput = document.querySelector("#numberAdress");

// Formulário de cartão
export const holderInput = document.querySelector("#cardholder-name");
export const numberCardInput = document.querySelector("#cardholder-number");
export const expMonthInput = document.querySelector("#cardholder-expdate");
export const expYearInput = document.querySelector("#cardholder-mmyy");
export const cvcInput = document.querySelector("#cardholder-cvc");

// Elementos do cartão interativo
export const numberCardDisplay = document.getElementById("placeholder-card");
export const nameCardDisplay = document.getElementById("name");
export const dateCardMM = document.getElementById("dateMM");
export const dateCardYY = document.getElementById("dateYY");
export const cvcCardDisplay = document.getElementById("cvc");

// Elementos de desconto
export const inputDesconto = document.querySelector("#desconto-input");
export const btnAddDesconto = document.querySelector("#desconto-btn");
export const removeDesconto = document.querySelector("#desconto-remove");
export const realPrice = document.querySelector("#productName p");
export const descontPrice = document.querySelector("#productName span");

// Temporizador
export const clock = document.getElementById("timer");