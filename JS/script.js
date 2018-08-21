// // Asks for the user's first name
// let firstName = prompt("What is your first name?");
// // // // Logs the user's first name to the console
// console.log(firstName);
// // // // Asks for the user's last name
// let lastName = prompt("What is your last name?");
// // // // Alerts the user's last name
// alert(lastName);
// *Asks for the user's birthday, confirms whether the birthday recieved is correct, and alerts the resulting birthday
// var birthYear = prompt("What year were you born in?");
// var birthMonth = prompt("What month were you born in?");
// var birthDay = prompt("What day were you born on?");
//
// var dateOfBirth = (birthMonth + " " + birthDay + " " + birthYear);
// alert("Your birthday is: " + dateOfBirth);

//Self-parsing function built into JS? Awesome.
//
// let test = prompt(`What is your birthday?`)
// let bd = new Date(test);
// let i = 0
//
//   while (i !== 1){
//     if (confirm("Your birthday was entered as: \n" + bd + "\nIs this correct?")){
//       alert("Your birthday is: \n" + bd);
//       i++;}
//      else {
//       test = prompt(`What is your birthday?`)
//       bd = new Date(test);
//     }
//   }


// We are learning about conditional statements
// And how to compare data types
// if (1 !== 1){
//   console.log("I am here");
// };
//

//Day 3 - Else if

// let userInput = prompt("PLease enter a number")
//
// if (Number.userInput > 5) {
//   console.log("Input greater than 5")
// }else if (Number.userInput < 5) {
//   console.log("input is less than 5")
// } else if (Number.userInput == 5) {
//   console.log("input is 5")
// }else{
//   console.log("input is not a number")
// }

//Day 3 - Switch
// const today = new Date().getDay();
// // console.log(today)
// switch (today) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
// }

//Day 3 - Math
// const addition = 1 + 1;
// const subtraction = 2 - 1;
// const multiply = 2 * 2;
// const divide = 4 / 2;
// const modulo = 11 % 3;

let myNum = 1;
// myNum++;
// myNum--;

myNum += 3;
console.log(myNum);
