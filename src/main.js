import * as dom from "./modules/dom-elements.js";
import * as validation from "./modules/form-validation.js";
import * as formatters from "./modules/formatters.js";
import { initCardDisplay, updateCardDisplay } from "./modules/card-display.js";
import {
  initDiscountHandler,
  applyDiscount,
} from "./modules/discount-handler.js";
import { initTimer } from "./modules/timer.js";
import { submitFormData } from "./modules/api-service.js";

document.addEventListener("DOMContentLoaded", () => {
  initCardDisplay();
  initDiscountHandler();
  initTimer();
  applyDiscount();

  setupFormValidation();
  setupInputFormatters();
  setupTooltips();
});

function setupFormValidation() {
  // Configura listeners de validação para cada input
  const numberInputs = [
    dom.numberCardInput,
    dom.cpfInput,
    dom.telInput,
    dom.cepInput,
    dom.addressNumberInput,
    dom.cvcInput,
  ];
  numberInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = validation.onlyNumbers(input.value);
    });
  });

  const textInputs = [dom.nameInput, dom.addressInput, dom.holderInput];
  textInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = validation.onlyLetters(input.value);
      validation.validateInput(input, "minLetters", "string");
    });
  });

  // Configura formatters específicos
  dom.cpfInput.addEventListener("input", () => {
    dom.cpfInput.value = formatters.formatCPF(dom.cpfInput.value);
    validation.validateInput(dom.cpfInput, "cpf");
  });

  dom.telInput.addEventListener("input", () => {
    dom.telInput.value = formatters.formatTel(dom.telInput.value);
    validation.validateInput(dom.telInput, "tel");
  });

  dom.cepInput.addEventListener("input", () => {
    dom.cepInput.value = formatters.formatCep(dom.cepInput.value);
    validation.validateInput(dom.cepInput, "cep");
  });

  dom.numberCardInput.addEventListener("input", () => {
    dom.numberCardInput.value = formatters.formatCardNumber(
      dom.numberCardInput.value
    );
    validation.validateInput(dom.numberCardInput, "card");
    updateCardDisplay(dom.numberCardDisplay, dom.numberCardInput);
  });
}

function setupInputFormatters() {
  // Configura formatação para outros inputs
  const numberEcvc = [dom.addressNumberInput, dom.cvcInput];
  numberEcvc.forEach((input) => {
    input.addEventListener("input", () => {
      validation.validateInput(input, "num");
    });
  });
}

function setupTooltips() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
}

dom.form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    const values = {
      name: dom.nameInput.value.trim(),
      cpf: dom.cpfInput.value.trim(),
      tel: dom.telInput.value.trim(),
      cep: dom.cepInput.value.trim(),
      address: dom.addressInput.value.trim(),
      addressNumber: dom.addressNumberInput.value.trim(),
      cardName: dom.holderInput.value.trim(),
      cardNumber: dom.numberCardInput.value.trim(),
      expMounth: dom.expMonthInput.value.trim(),
      expYear: dom.expYearInput.value.trim(),
      cvc: dom.cvcInput.value.trim(),
    };
    const errors = validate(values, validation.rules);
    if (errors) {
      const errorToast = new bootstrap.Toast(
        document.getElementById("liveToast")
      );
      errorToast.show();
    } else {
      dom.form.classList.add("d-none");
      dom.formComplete.classList.remove("d-none");
      dom.productContainer.classList.add("d-none");
      await submitFormData(values);
    }
  } catch (error) {
    console.log("Não foi possível enviar o form: ", error);
  }
});
