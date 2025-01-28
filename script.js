const calculateTipButton = document.getElementById("calculateTip");
const billAmountInput = document.getElementById("billAmount");
const tipPercentageSelect = document.getElementById("tipPercentage");
const resultDiv = document.getElementById("result");
const tipAmountDisplay = document.getElementById("tipAmount");
const totalBillDisplay = document.getElementById("totalBill");



calculateTipButton.addEventListener("click", () => {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageSelect.value);

  if (!billAmount || billAmount <= 0) {
    alert(`Please enter a valid bill amount !`);
    return;
  }

  const tipAmount = billAmount * tipPercentage;
  const totalBill = billAmount + tipAmount;
  tipAmountDisplay.innerHTML = `Tip Amount:  ₹<span>${tipAmount.toFixed(2)}</span>`;
  totalBillDisplay.innerHTML = `Total Bill:  ₹<span>${totalBill.toFixed(2)}</span>`;

  resultDiv.style.display = "block";
});


const clearValue =()=>{
  billAmountInput.value = "";
  resultDiv.style.display = "none";
}
