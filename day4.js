function sum() {
  for (let i = 1; i < 11; i++) {
    process.stdout.write(i.toString() + " ");
  }
}

function printTable() {
  for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
  }
}

function sum() {
  let i = 1;
  let sum = 0;
  while (i <= 10) {
    sum += i;
    i++;
  }
}

function printNumbersToN(n) {
  let i = n;
  while (i > 0) {
    if (i == 5) {
      i--;
      continue;
    }
    console.log(i);
    i--;
  }
}

printNumbersToN(10);

//DO WHILE LOOP

function printDoWhile(n) {
  let i = n;
  do {
    console.log(i);
    i--;
  } while (i > 0);
}

function factorial(n) {
  let i = n;
  let factorial = 1;
  do {
    factorial = factorial * i;
    i--;
  } while (i > 0);
  console.log(factorial);
}

// process.stdout.write(i.toString() + ' ');

function trianglePattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log("");
  }
}
