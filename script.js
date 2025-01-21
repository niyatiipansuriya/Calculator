let input1 = "";
let input2 = "";
let b = false;
let op = "";
let answer = 0;

let numEl = document.querySelectorAll(".num");
let signEl = document.querySelectorAll(".sign");
let answerEl = document.getElementById("ans");
let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let opEl = document.getElementById("opr");
let equalEl = document.getElementById("equal");

numEl.forEach((num) => {
  num.addEventListener("click", function () {
    if (b === false) {
      i1.textContent = "";
      i2.textContent = "";
      opEl.textContent = "";
      answerEl.textContent = "";
      equalEl.textContent = "";
      const x = num.textContent;
      input1 = input1 + String(x);
      i1.textContent = String(input1);
    } else {
      const x = num.textContent;
      input2 = input2 + String(x);
      i2.textContent = String(input2);
    }
  });
});

signEl.forEach((sign) => {
  sign.addEventListener("click", function () {
    if (sign.textContent === "=") {
      equalEl.textContent = "=";
      let number1 = 0;
      let number2 = 0;
      number1 = Number(input1);
      number2 = Number(input2);

      if (input2 === "") {
        number2 = 0;
      }

      if (op === "+") {
        answer = number1 + number2;
      } else if (op === "-") {
        answer = number1 - number2;
      } else if (op === "*") {
        answer = number1 * number2;
      } else if (op === "/") {
        answer = number1 / number2;
      } else {
        answer = number1;
      }

      answerEl.textContent = String(answer);
      b = false;
      input1 = "";
      input2 = "";
      answer = 0;
      op = "";
    } else {
      if (sign.textContent === "C") {
        input1 = "";
        input2 = "";
        i1.textContent = "";
        i2.textContent = "";
        opEl.textContent = "";
        answerEl.textContent = "";
        equalEl.textContent = "0";
      } else {
        op = sign.textContent;
        b = true;
        opEl.textContent = String(op);
      }
    }
  });
});
