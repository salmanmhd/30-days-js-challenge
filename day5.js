function evenOrOdd(n) {
  if (n % 2 == 0) return 'This is an even number';
  return 'This is an odd number';
}

function squareOfANumber(number) {
  if (typeof number !== 'number') return 'Please enter only numbers';

  return number * number;
}

const largestNumbers = function (x, y) {
  if (x > y) {
    return `${x} is greater than ${y}`;
  } else {
    return `${y} is greater than ${x}`;
  }
};

const addStrings = function (s1, s2) {
  return `${s1} ${s2}`;
};

const sumOfTwoNumbers = (a, b) => a + b;

const isContains = (str, s) => str.includes(s);

function hOrder(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function toPass() {
  console.log('passed function called');
}

//Task 10:
function task10(fn1, fn2, v) {
  const temp = fn1(v);

  return fn2(temp);
}

function fn1(v) {
  return Math.floor(Math.random() * 10) + v;
}

function fn2(v) {
  return v + 20;
}

console.log(task10(fn1, fn2, 12));
