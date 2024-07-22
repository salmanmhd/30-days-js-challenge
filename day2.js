function isEligible(age, gender) {
  if (!age || !gender) {
    console.log('Please enter your age and gender');
    return;
  }

  if (typeof age != 'number' || typeof gender != 'string') {
    console.log('Please enter correct details');
    return;
  }
  if (age >= 18 && gender === 'male') {
    console.log('You are eligible for dash');
    return;
  }

  if (age >= 20 && gender === 'female') {
    console.log('You are eligible for falana');
    return;
  }

  console.log('You are not eligible');
}

// isEligible(1, "1");

// console.log(typeof(typeof(1)));

// let s = 'this is a sring';
// console.log(s);

// let a = s;
// console.log(a);

// a = 'a changed to other string';

// console.log(a);
// console.log(s);

let array1 = [1, 2, 3];
console.log(`This is array1 ${array1}`);

let tempArray = array1;
console.log(`This is tempArray before change ${tempArray} `);

tempArray[1] = 'changed value';

console.log(`array1: ${array1}`);
console.log(`tempArray: ${tempArray}`);
