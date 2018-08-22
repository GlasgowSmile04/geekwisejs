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

// let myNum = 1;
// // myNum++;
// // myNum--;
//
// myNum += 3;
// console.log(myNum);


//Takehome Day 3
//Prompts your user for their name.
let name = prompt("What is your name?")
console.log(name);
//Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options
//i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
// let color = prompt(`What is your favorite color? \n IE: red, orange, yellow, green, blue, pink, purple, black, white, or grey`).toLowerCase();
//Depending on the color, write 9 different responses for the possible answers.
//Include the user's name in the response message.
let i = 0
while (i < 1) {
let color = prompt(`What is your favorite color? \n IE: red, orange, yellow, green, blue, pink, purple, black, white, or grey`).toLowerCase();

  console.log(i)
  switch (color) {
    case "red":
      alert("If it's painted red, it's goes faster.")
      i++
      break;
    case "orange":
      alert("A Clockwork Orange")
      i++
      break;
    case "yellow":
      alert("Yellow Submarine.")
      i++
      break;
    case "green":
      alert("There ain't no rehab when you addicted to the money maine.")
      i++
      break;
    case "blue":
      alert("That one Eiffel 65 song.")
      i++
      break;
    case "pink":
      alert("Apparently only real men wear this.")
      i++
      break;
    case "purple":
      alert("Mace Windu was an asshole and a large reason why Anikin turned to the dark side.")
      i++
      break;
    case "black":
      alert("I wish my goth phase never ended.")
      i++
      break;
    case "white":
      alert("Stripes.")
      i++
      break;
    case "grey":
      alert("The area in which I've defined my morals.")
      i++
      break;

    default: let color = alert(`That is not a defined color, try again!`);
  }

}
