function calculate() {
  var currencyRates = {
    MMK: 1562.72,
    CNY: 5.3,
    USD: 0.74,
    MYR: 3.51,
  };
  var input = document.getElementById("school-fees");
  var selectedValue = document.querySelector('input[name="currency"]:checked');
  var calculatedValue;
  var answer = "";
  if (!isNaN(input.value) && input.value > 0) {
    input = parseFloat(document.getElementById("school-fees").value);
    if (selectedValue != null) {
      calculatedValue = input * currencyRates[selectedValue.value];
      answer = calculatedValue + " " + selectedValue.value;
    } else {
      answer = "Please select currency.";
    }
  } else {
    answer = "Please type a valid number";
  }
  document.getElementById("ans").innerHTML = answer;
}
