/* CARD's Interative Details */
const numberCard = document.getElementById("placeholder-card");
const nameCard = document.getElementById("name");
let dateCardMM = document.getElementById("dateMM");
let dateCardYY = document.getElementById("dateYY");
const cvcCard = document.getElementById("cvc");

numberCard.innerText = "0000 0000 0000 0000";
nameCard.innerText = "Jane Appleseed";
dateCardMM.innerText = "00";
dateCardYY.innerText = "00";
cvcCard.innerText = "000";

let innerCard = (card, input) => {
  card.innerText = input.value;
};

$holder.oninput = () => {
  innerCard(nameCard, $holder);
};
$cvc.oninput = () => {
  innerCard(cvcCard, $cvc);
};

$expMounth.addEventListener("input", () => innerCard(dateCardMM, $expMounth));
$expYear.addEventListener("input", () => innerCard(dateCardYY, $expYear));

export { innerCard };
