import * as dom from "../utils/dom-elements.js";

dom.numberCard.innerText = "0000 0000 0000 0000";
dom.nameCard.innerText = "Jane Appleseed";
dom.dateCardMM.innerText = "00";
dom.dateCardYY.innerText = "00";
dom.cvcCard.innerText = "000";

let innerCard = (card, input) => {
  card.innerText = input.value;
};

dom.$holder.oninput = () => {
  innerCard(dom.nameCard, dom.$holder);
};

dom.$cvc.oninput = () => {
  innerCard(dom.cvcCard, dom.$cvc);
};

dom.$expMounth.addEventListener("input", () => innerCard(dateCardMM, dom.$expMounth));
dom.$expYear.addEventListener("input", () => innerCard(dateCardYY, dom.$expYear));

export { innerCard };
