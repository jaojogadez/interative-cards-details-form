import { rules } from "./rules.js";

const $formComplete = document.getElementById("form-complete");
const $productContainer = document.getElementById("productContainer");

/* FORM's ELEMENTs PESSOAL INFO*/
const $form = document.querySelector("form");
const $name = document.querySelector("#name-input");
const $cpf = document.querySelector("#cpf");
const $tel = document.querySelector("#tel");
const $cep = document.querySelector("#cep");
const $address = document.querySelector("#address");
const $addressNumber = document.querySelector("#numberAdress");

/* FORM's ELEMENTs CARD INFO*/
const $holder = document.querySelector("#cardholder-name");
const $numberCard = document.querySelector("#cardholder-number");
const $expMounth = document.querySelector("#cardholder-expdate");
const $expYear = document.querySelector("#cardholder-mmyy");
const $cvc = document.querySelector("#cardholder-cvc");

$form.addEventListener("submit", (event) => {
  try {
    event.preventDefault();
    const values = {
      name: $name.value.trim(),
      cpf: $cpf.value.trim(),
      tel: $tel.value.trim(),
      cep: $cep.value.trim(),
      address: $address.value.trim(),
      addressNumber: $addressNumber.value.trim(),
      cardName: $holder.value.trim(),
      cardNumber: $numberCard.value.trim(),
      expMounth: $expMounth.value.trim(),
      expYear: $expYear.value.trim(),
      cvc: $cvc.value.trim(),
    };

    // Validate JS
    const errors = validate(values, rules);

    if (errors) {
      const errorToast = new bootstrap.Toast(
        document.getElementById("liveToast")
      );
      errorToast.show();
      console.log(errors);
      
    } else {
      $form.classList.add("d-none");
      $formComplete.classList.remove("d-none");
      $productContainer.classList.add("d-none");
      fetch("https://api.sheetmonkey.io/form/9qGHZ1Ki5b8WLuknMeVd1g", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          cpf: values.cpf,
          tel: values.tel,
          cep: values.cep,
          address: values.address,
          addressNumber: values.addressNumber,
          cardName: values.cardName,
          cardNumber: values.cardNumber,
          expMounth: values.expMounth,
          expYear: values.expYear,
          cvc: values.cvc,
        }),
      });
      console.log(values);
    }
  } catch (error) {
    console.log(error);
  }
});
