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

const age = parseInt(prompt("How old are you?"));

// age가 숫자면 false, 문자면 true
const condition = isNaN(age);

if (isNaN(age)) {
  alert("Please write a number...");
} else if (age < 18) {
  alert("You are toooooo young...T.T");
} else if (age >= 18 && age <= 50) {
  alert("You can do it!");
} else {
  alert("Thank you for writing your age...");
}
