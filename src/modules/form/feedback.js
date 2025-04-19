const expectedLengths = {
  cpf: 11,
  tel: 11,
  cep: 8,
  num: 3,
  minLetters: 10,
  card: 16,
  select: 2,
};

// Função para validar inputs
export function validateInput(input, type, cond){
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
