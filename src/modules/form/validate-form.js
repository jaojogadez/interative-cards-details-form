import { rules } from "./rules.js";
import * as dom from "../../utils/dom-elements.js";

dom.$form.addEventListener("submit", (event) => {
  try {
    event.preventDefault();
    const values = {
      name: dom.$name.value.trim(),
      cpf: dom.$cpf.value.trim(),
      tel: dom.$tel.value.trim(),
      cep: dom.$cep.value.trim(),
      address: dom.$address.value.trim(),
      addressNumber: dom.$addressNumber.value.trim(),
      cardName: dom.$holder.value.trim(),
      cardNumber: dom.$numberCard.value.trim(),
      expMounth: dom.$expMounth.value.trim(),
      expYear: dom.$expYear.value.trim(),
      cvc: dom.$cvc.value.trim(),
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
      dom.$form.classList.add("d-none");
      dom.$formComplete.classList.remove("d-none");
      dom.$productContainer.classList.add("d-none");
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
