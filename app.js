function helloName() {
  const yourName = document.getElementById("user-name").value;
  const yourAge = document.getElementById("user-age").value;
  alert("Hello!!! " + yourName + "!!! Nice to meet you!");
  const user = {
    yourName,
    yourAge,
  };
  console.log("user name : " + user.yourName + ", user age : " + user.yourAge);
}

const calcultor = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  multi: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calcultor.plus(5, 1);
const minusResult = calcultor.minus(plusResult, 2);
const divResult = calcultor.div(minusResult, 7);
const multiResult = calcultor.multi(divResult, 2);
const powerResult = calcultor.power(multiResult, 8);

const age = prompt("How old are you?");

console.log(typeof age, typeof parseInt(age));
