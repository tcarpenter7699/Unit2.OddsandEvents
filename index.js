document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const numberInput = form.querySelector("input[name='number']");
    const numberBankOutput = document.querySelector("#numberBank output");
    const sortOneButton = document.querySelector("#sortOne");
    const sortAllButton = document.querySelector("#sortAll");
    const oddsOutput = document.querySelector("#odds output");
    const evensOutput = document.querySelector("#evens output");
  
    let numbers = [];
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const number = parseInt(numberInput.value);
      if (!isNaN(number)) {
        numbers.push(number);
        renderNumberBank();
        numberInput.value = "";
      }
    });
  
    sortOneButton.addEventListener("click", function () {
      if (numbers.length > 0) {
        numbers = numbers.sort((a, b) => a - b);
        renderNumberBank();
      }
    });
  
    sortAllButton.addEventListener("click", function () {
      if (numbers.length > 0) {
        numbers = numbers.sort((a, b) => a - b);
        renderNumberBank();
        renderSortedNumbers();
      }
    });
  
    function renderNumberBank() {
      numberBankOutput.textContent = numbers.join(", ");
    }
  
    function renderSortedNumbers() {
      const odds = numbers.filter((num) => num % 2 !== 0);
      const evens = numbers.filter((num) => num % 2 === 0);
      oddsOutput.textContent = odds.join(", ");
      evensOutput.textContent = evens.join(", ");
    }
  });  