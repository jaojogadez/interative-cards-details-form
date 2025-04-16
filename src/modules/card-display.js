import * as elements from "./dom-elements";

export function initCardDisplay() {
  elements.numberCardDisplay.innerText = "0000 0000 0000 0000";
  elements.nameCardDisplay.innerText = "Jane Appleseed";
  elements.dateCardMM.innerText = "00";
  elements.dateCardYY.innerText = "00";
  elements.cvcCardDisplay.innerText = "000";

  elements.expMonthInput.addEventListener("input", () =>
    updateCardDisplay(dateCardMM, expMonthInput)
  );
  elements.expYearInput.addEventListener("input", () =>
    updateCardDisplay(dateCardYY, expYearInput)
  );
  elements.holderInput.oninput = () =>
    updateCardDisplay(nameCardDisplay, holderInput);
  elements.cvcInput.oninput = () => updateCardDisplay(cvcCardDisplay, cvcInput);

  elements.numberCardInput.addEventListener("input", () => {
    updateCardDisplay(numberCardDisplay, numberCardInput);
  });
}

function updateCardDisplay(cardElement, input) {
  cardElement.innerText = input.value;
}
