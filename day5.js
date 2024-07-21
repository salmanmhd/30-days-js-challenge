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
