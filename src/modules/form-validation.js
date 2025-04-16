export const rules = {
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

export const expectedLengths = {
  cpf: 11,
  tel: 11,
  cep: 8,
  num: 3,
  minLetters: 10,
  card: 16,
  select: 2,
};

export function validateInput(input, type, cond) {
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
}

export function onlyNumbers(value) {
  return value.replace(/\D/g, "");
}

export function onlyLetters(string) {
  return string.replace(/[^A-Za-zÀ-ÿ\s]/gu, "");
}

