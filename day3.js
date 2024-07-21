function numberType(n) {
  if (typeof n !== "number") return "Please enter numbers only";
  var ans;
  n > 0
    ? (ans = `${n} is positive`)
    : n < 0
    ? (ans = `${n} is negative`)
    : (ans = "zero");

  return ans;
}

function isEligibleToVote(age) {
  if (typeof age !== "number")
    return "Please enter age in numbers like: 12, 18, etc";

  return age >= 18 ? "You are eligible" : "You are not eligible";
}

function largestOfThree(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      return "a is largest";
    }
    return "c is largest";
  } else if (b > c) {
    return "b is largest";
  } else {
    return "c is largest";
  }
}

function getDay(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";

    default:
      return "Please enter correct number i.e., between 1 - 7";
  }
}

function evenOrOdd(n) {
  return n % 2 == 0 ? "even" : "odd";
}

function leapYear(year) {
  return year % 4 !== 0
    ? "not leap year"
    : year % 100 !== 0
    ? "leap year"
    : year % 400 === 0
    ? "Leap year"
    : "not leap year";
}

function gradeAssignment(grade) {
  switch (true) {
    case grade < 50:
      return "Your grade is F";
    case grade >= 50 && grade < 60:
      return "Your grade is E";

    case grade >= 60 && grade < 70:
      return "Your grade is D";

    case grade >= 70 && grade < 80:
      return "Your grade is C";

    case grade >= 80 && grade < 90:
      return "Your grade is B";

    case grade >= 90 && grade <= 100:
      return "Your grade is A";

    default:
      return "Please enter your marks carefully";
  }
}

console.log(gradeAssignment(1));
