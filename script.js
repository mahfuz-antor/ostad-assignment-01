console.log("Assignment-01");

// Task: 1) Topic: Online Store Discount Calculator (If-Else Statement)

function storeDiscount(amount) {
  if (amount < 50) {
    let showResult = `Discount: 0, Total: ${amount}`;
    return showResult;
  } else if (amount > 50 && amount < 100) {
    let discount = amount * 0.05;
    let total = amount + discount;
    let showResult = `Discount: ${discount}, Total: ${total}`;
    return showResult;
  } else if (amount > 100 && amount < 200) {
    let discount = amount * 0.1;
    let total = amount + discount;
    let showResult = `Discount: ${discount}, Total: ${total}`;
    return showResult;
  } else if (amount > 200) {
    let discount = amount * 0.15;
    let total = amount + discount;
    let showResult = `Discount: ${discount}, Total: ${total}`;
    return showResult;
  }
}

console.log(storeDiscount(55));

// ****** END TASK 01 ******

// Task: 2) Topic: Filter Even Numbers
let taskTwoArr = [12, 34, 45, 23, 6, 78, 54, 90];

function filterEven(arr) {
  return arr.filter(function (item) {
    return item % 2 === 0;
  });
}

console.log(filterEven(taskTwoArr));

// ****** END TASK 02 ******

// Task: 3) Topic: Multiplication Table Generator
function multiplyTable(value) {
  for (let i = 1; i <= 10; i++) {
    let multiplication = `${i} x ${value} = ${i * value}`;
    console.log(multiplication);
  }
}

multiplyTable(5);

// ****** END TASK 03 ******

// Task: 4) Topic: Grade Calculator (JavaScript Switch Case)
// let studentResult = 80;
function calculateGrade(marks) {
  let grade;
  switch (true) {
    case marks >= 90:
      grade = "A";
      break;
    case marks >= 80:
      grade = "B";
      break;
    case marks >= 70:
      grade = "C";
      break;
    case marks >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  return grade;
}

console.log(calculateGrade(99));

// ****** END TOTAL TASK ******
