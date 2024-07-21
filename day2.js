function isEligible(age, gender) {
  if (!age || !gender) {
    console.log("Please enter your age and gender");
    return;
  }

  if(typeof(age) != "number" ||typeof(gender) != "string"){
        console.log("Please enter correct details");
        return;
  }
  if (age >= 18 && gender === "male") {
    console.log("You are eligible for dash");
    return;
  }

  if (age >= 20 && gender === "female") {
    console.log("You are eligible for falana");
    return} ;

  console.log("You are not eligible");
}

// isEligible(1, "1");

const a = "malue";

const b = a !== "male";
console.log(b);

// console.log(typeof(typeof(1)));

