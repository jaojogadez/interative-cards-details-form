// Lista de elementos DOM

/* FORM's ELEMENTs */
const $form = document.querySelector("form");
const $formComplete = document.getElementById("form-complete");
const $productContainer = document.getElementById("productContainer");

const $name = document.querySelector("#name-input");
const $cpf = document.querySelector("#cpf");
const $tel = document.querySelector("#tel");
const $cep = document.querySelector("#cep");
const $address = document.querySelector("#address");
const $addressNumber = document.querySelector("#numberAdress");

const $holder = document.querySelector("#cardholder-name");
const $numberCard = document.querySelector("#cardholder-number");
const $expMounth = document.querySelector("#cardholder-expdate");
const $expYear = document.querySelector("#cardholder-mmyy");
const $cvc = document.querySelector("#cardholder-cvc");

/* CARD's ELEMENTS */
const numberCard = document.getElementById("placeholder-card");
const nameCard = document.getElementById("name");
const dateCardMM = document.getElementById("dateMM");
const dateCardYY = document.getElementById("dateYY");
const cvcCard = document.getElementById("cvc");

export {
  $name,
  $cpf,
  $tel,
  $cep,
  $address,
  $addressNumber,
  $holder,
  $numberCard,
  $expMounth,
  $expYear,
  $cvc,
  $form,
  $formComplete,
  $productContainer,
  numberCard,
  nameCard,
  dateCardMM,
  dateCardYY,
  cvcCard
};
