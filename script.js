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

console.log(storeDiscount(44));

// ***** END TASK 01 ******

// Task: 2) Topic: Filter Even Numbers

let taskTwoArr = [12, 34, 45, 23, 6, 78, 54, 90];
// console.log(taskTwoArr);
for (let element in taskTwoArr) {
  if (taskTwoArr[element] % 2 === 0) {
    // let resultArr = []
    // resultArr.push(taskTwoArr[element]);
    console.log(taskTwoArr[element]);
  }
}

// ***** END TASK 02 ******

// Task: 3) Topic: Multiplication Table Generator
function multiplyTable(value) {
  for (let i = 1; i <= 10; i++) {
    let multiplication = `${i} * ${value} = ${i * value}`;
    console.log(multiplication);
  }
}

multiplyTable(5);

// ***** END TASK 03 ******

// Task: 4) Topic: Grade Calculator (JavaScript Switch Case)
let studentResult = 80;
switch (true) {
  case studentResult >= 90:
    console.log("A");
    break;
  case studentResult >= 80:
    console.log("B");
    break;
  case studentResult >= 70:
    console.log("C");
    break;
  case studentResult >= 60:
    console.log("D");
    break;
  case studentResult < 60:
    console.log("F");
}

// ***** END TOTAL TASK ******
