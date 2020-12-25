const data = {
  USD: {EUR: 0.82, GBP: 0.74},
  EUR: {USD: 1.23, GBP: 0.91},
  GBP: {USD: 1.35, EUR: 1.10},
  TR:  {USD: 0.13, EUR: 0.11, GBP: 0.097}
};

const currencyKeys = Object.keys(data);

function createCurrencyElements(elements, root, inputName){
  for(let i =0; i< elements.length; i++){
    const currencyKeyDiv   = document.createElement("div");
    const currencyKeyInput = document.createElement("input");
    currencyKeyInput.setAttribute("type", "radio");
    currencyKeyInput.setAttribute("name", inputName);
    currencyKeyInput.setAttribute("id", inputName + elements[i]);
    currencyKeyInput.setAttribute("value", elements[i]);

    const currencyKeyLabel = document.createElement("label");
    currencyKeyLabel.setAttribute("for", inputName + elements[i]);
    currencyKeyLabel.textContent = elements[i];

    currencyKeyDiv.appendChild(currencyKeyInput);
    currencyKeyDiv.appendChild(currencyKeyLabel);
    root.appendChild(currencyKeyDiv);
  }
}

//from
const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";
createCurrencyElements(currencyKeys, parentEl, fromInputName);

// to
const parentToEl = document.querySelector("#currency-box-to");
const toInputName = "currency_to";
createCurrencyElements(currencyKeys, parentToEl, toInputName);


const calculateButton = document.querySelector("#calculate-button");

calculateButton.addEventListener("click", function(){

  const checkFrom = document.querySelector("input[name='currency_from']:checked");
  const checkTo = document.querySelector("input[name='currency_to']:checked");
  
  if (!checkFrom ||!checkTo) {
    alert("Please select both choices.")
    return;
  }
   
    // kimden ceviriyourz
   const fromTarget = document.querySelector("input[name='currency_from']:checked").value;
   // kime ceviriyoruz
   const toTarget   = document.querySelector("input[name='currency_to']:checked").value;
   // amountu alalim

   if (fromTarget === toTarget) {
     alert("Please select different choices.")
     return;
   }

   const amount = document.querySelector("input[name='amount']").value;

   if (isNaN(amount)) {
     alert("Amount should be a number.")
     return;
   }

   const currentCurrencyObject = data[fromTarget];
   const resultForOne = currentCurrencyObject[toTarget];
   const result = amount * resultForOne;

   const currencyResult = document.querySelector("#currency-result");
   currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
});