function calculate() {
  var currencyRates = {
    MMK: 1562.72,
    CNY: 5.3,
    USD: 0.74,
    MYR: 3.51,
  };
  var input = parseFloat(document.getElementById("school-fees").value);
  var selectedValue = document.querySelector('input[name="currency"]:checked');
  var calculatedValue;
  var answer = "";
  if (selectedValue != null) {
    calculatedValue = input * currencyRates[selectedValue.value];
    answer = calculatedValue + " " + selectedValue.value;
  } else {
    answer = "Please select currency.";
  }
  document.getElementById("ans").innerHTML = answer;
}
