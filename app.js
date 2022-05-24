clickBtn("big-btn");
// big btn end

let bigBtn = document.getElementById("big-btn").addEventListener("click", randomNumber);

function randomNumber() {
  let randomNumber = Math.ceil((Math.random() + 12) * 85 * 5);

  document.getElementById("generatedNumber").value = randomNumber;
}

function converNumber(id) {
  let forInput = document.getElementById(id).value;
  let inputNumber = parseInt(forInput);
  return inputNumber;
}

//btn styling and functionality
function clickBtn(BtnId) {
  document.getElementById(BtnId).addEventListener("click", function () {
    this.classList.add("clickBtn");
    setTimeout(() => {
      this.classList.remove("clickBtn");
    }, 100);
  });
}
//btn styling functionality end

//calculator funtionality start

// let buttons = document.getElementById("buttons").children;
// let Empty = [];
// for (let i = 0; i < buttons.length; i++) {
//   let perBtn = buttons[i];
//   perBtn.addEventListener("click", function () {
//     let valueOfBtn = perBtn.innerText;
//     console.log(valueOfBtn);
//     // valueOfBtn = parseInt(valueOfBtn);
//     // document.getElementById("calculatorInput").value = perBtn.innerText;
//   });
// }
let buttons = document.getElementsByClassName("numberBtn");

for (let i = 0; i < buttons.length; i++) {
  let perBtn = buttons[i];

  perBtn.addEventListener("click", () => {
    perBtnvalue = perBtn.innerText;
    // StoredValue = perBtnvalue;
    document.getElementById("calculatorInput").value = perBtnvalue;
  });
}

// let = StoredValue = "";
// buttons.forEach((element) => {
//   element.addEventListener("click", () => {
//     let StoredValue = StoredValue + element;
//     document.getElementById("calculatorInput").value = StoredValue;
//   });
// });
