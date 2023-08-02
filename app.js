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
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calcultor.add(5, 1);
calcultor.minus(3, 2);
calcultor.div(4, 7);
calcultor.multi(5, 2);
calcultor.power(2, 8);
