/* FORM's ELEMENTs PESSOAL INFO*/
const $form = document.querySelector("form");
const $name = document.querySelector("#name");
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
      message: "^O CPF é obrigatório",
    },
    format: {
      pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      message: "^O CPF deve estar no formato 000.000.000-00",
    },
  },
  tel: {
    presence: {
      allowEmpty: false,
      message: "^O telefone celular é obrigatório",
    },
    format: {
      pattern: /^\(\d{2}\) \d{5}-\d{4}$/,
      message: "^O telefone deve estar no formato (00) 00000-0000.",
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
      pattern: /^\d{16}$/,
      message: "^O número do cartão deve ter exatamente 16 dígitos.",
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
      greaterThanOrEqualTo: new Date().getFullYear(),
      message: "^O ano de expiração deve ser igual ou superior ao ano atual.",
    },
  },
  cvc: {
    presence: {
      allowEmpty: false,
      message: "O CVC é obrigatório",
    },
    format: {
      pattern: /^\d{3}$/,
      message: "^O CVC deve ter exatamente 3 dígitos.",
    },
  },
};

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = {
    name: $name.value,
    cpf: $cpf.value,
    tel: $tel.value,
    cep: $cep.value,
    address: $address.value,
    addressNumber: $addressNumber.value,
    cardName: $holder.value,
    cardNumber: $numberCard.value,
    expMounth: $expMounth.value,
    expYear: $expYear.value,
    cvc: $cvc.value,
  };

  const errors = validate(values, rules);
  if (errors) {
    console.log(errors);
  } else {
    alert("Form Enviado!");
  }
  
});

/* TIMER's ELEMENT*/
const $clock = document.getElementById("timer");

let tempoRestante = 31 * 60000;
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
  }
};

intervalo = setInterval(atualizarTempo, 10);
atualizarTempo();
