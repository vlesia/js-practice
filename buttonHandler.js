document.getElementById("alertButton").addEventListener("click", function () {
  alert("Hello World!");
});

document.getElementById("squareButton").addEventListener("click", function () {
  const number = document.getElementById("numberInput").value;
  if (number) {
    const square = Math.round(number * number * 100) / 100;
    alert(`Квадрат числа ${number} дорівнює ${square}.`);
    numberInput.value = "";
  } else {
    alert("Будь ласка, введіть число.");
  }
});
