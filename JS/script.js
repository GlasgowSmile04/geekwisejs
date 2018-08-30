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
// let name = prompt("What is your name?")
// console.log(name);
// //Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options
// //i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
// // let color = prompt(`What is your favorite color? \n IE: red, orange, yellow, green, blue, pink, purple, black, white, or grey`).toLowerCase();
// //Depending on the color, write 9 different responses for the possible answers.
// //Include the user's name in the response message.
// let i = 0
// while (i < 1) {
// let color = prompt(`What is your favorite color? \n IE: red, orange, yellow, green, blue, pink, purple, black, white, or grey`).toLowerCase();
//
//   console.log(i)
//   switch (color) {
//     case "red":
//       alert(name + " If it's painted red, it's goes faster.")
//       i++
//       break;
//     case "orange":
//       alert(name + " A Clockwork Orange")
//       i++
//       break;
//     case "yellow":
//       alert(name + " Yellow Submarine.")
//       i++
//       break;
//     case "green":
//       alert(name + " There ain't no rehab when you addicted to the money maine.")
//       i++
//       break;
//     case "blue":
//       alert(name + " That one Eiffel 65 song.")
//       i++
//       break;
//     case "pink":
//       alert(name + " Apparently only real men wear this.")
//       i++
//       break;
//     case "purple":
//       alert(name + " Mace Windu was an asshole and a large reason why Anikin turned to the dark side.")
//       i++
//       break;
//     case "black":
//       alert(name + " I wish my goth phase never ended.")
//       i++
//       break;
//     case "white":
//       alert(name + " Stripes.")
//       i++
//       break;
//     case "grey":
//       alert(name + " The area in which I've defined my morals.")
//       i++
//       break;
//
//     default: let color = alert(`That is not a defined color, try again!`);
//   }
//
// }

//Day 4 - Arrays and Loops
// let myArray = ['Red', 'Blue', 'Green', 'Yellow', 'Red', 'Orange', 'Purple', 'Black', 'White'];
// console.log(myArray[4]); // pull a specific item from Array
// console.log(myArray.lenght); // gives length of Array (starting at 0);
// //You can put all data types in an Array
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Array.isArray(nums));
// nums.push(10);
// nums.unshift(0)
// nums.pop();
// nums.splice(6, 1); // index, count
// // let slice = nums.slice(3, 6);
// let color = myArray.indexOf('Green')
// myArray.splice(color, 1); // scplice color for 1 value
// console.log(myArray);
// let lastIndex = myArray.lastIndexOf('Red');
// console.log(myArray.reverse());
// console.log(myArray.sort().reverse());

// console.log(lastIndex);
// console.log(slice);
// console.log(nums);


//Day 4 - Loops (While, For, Do While, For Each, For of, For in)
// let num = 0;
// // while (num < 10){
// //   num++
// //   console.log(num)
// // }
//
// // for (let i = 0; i < 10; i++) {
// //   num+=1
// //   console.log(num)
// // }
// // console.log(num);
// //
// // for (var i = 0; i < myArray.length; i++) {
// //   console.log(myArray[i]);
// // }
//
// let myFavoriteMovies = [];
// let firstFavorite = ["A Clockwork Orange", 1971];
// let secondFavorite = ["Fear and Loathing in Las Vegas", 1990];
// let thirdFavorite = ["Mr. Nobody", 2006];
// myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);
// console.log(myFavoriteMovies);

//Takehome Day-4
// Creates an array of things you need or want to do this weekend by collecting three todos from the user.
// let toDo = [];
// let newToDo = [prompt(`Is there anything you'd like to do this weekend? \n"No" to quit.`)];
// while (newToDo != "No" || ""){
//   toDo.push(newToDo);
//   newToDo = [prompt(`Anything else? \n"No" to quit.`)]
// };
// // Using a for loop, change the items in the array by adding a value for how many days that item should take.
// // Hint: which data type is best suited for your todo items, based on what you will need to do to them?
// // function randomDay(){
// //   let day = Math.floor(Math.random() * 10)
// //   return day;
// // }
// for (var i = 0; i < toDo.length; i++) {
//   // toDo[i].splice(i, 0, randomDay())
//   let timeFrame = parseInt(prompt(`How many days will ${toDo[i][0]} this take?`))
//
//   if(!isNaN(timeFrame)){
//       toDo[i].push(1);
//   }else {
//
//   };
// };
// // // console.log(toDo);
// // Using a while loop, find the task that will take the longest and log it to the console.
// i--
// var j = 0
// while (j < toDo.length){
//   var x = toDo[j][1]
//   if(x <= toDo[i][1]){
//     x = toDo[j][1]
//     j++
//   } else {
//     j++
//   };
//
// }
// console.log(x)
// Using a do while loop, add the string 'easy-peasy' to all the tasks other than the one that will take the longest
// do{
//   toDo[][].push("easy-peasy");
// } while ()
// Finally, alert all the tasks that have 'easy-peasy' in the todo array.

// Day 5
// //Functions
// function basic(name, age){
//   return `My name is ${name}, and I am ${age} years old.`
// };

// nameThatBand("RadioHead")
//
// function nameThatBand(bandname){
//   return alert(`${bandname} is totally sick!`);
// };
// let inc = 0;
// //
// function sayGoodbye(){
//   if(inc < 5){
//     alert("hello");
//     inc++;
//     sayGoodbye();
//   }else{
//     return;
//   }
// }
// // sayGoodbye();
//
// // Arrow functions!
// // () => (); // 0 or 1+ args needs ()
//
// () => { // takes no arg and returns something
//   inc++
//   if(inc < 5){
//     sayGoodbye();
//   }
// }
//
// pasta => {//takes 1 arg and returns something
//   alert(`My favorite food is ${pasta}`)
// }
//
// pasta => (pasta.toUpperCase());
//
// (pasta, sauce) => {
//   //call an API to save this data
//   return  `The returned info is ${data}`;
// }
//
//
// // Accept 1 argument (age of the dog in years).
// function dogYear(years){
//   let parsed = parseInt(years)
//   if(!isNaN(parsed)){
//     return years * 7
//   }
//   else {
//     let parsed = prompt("I need a NUMBER!")
//     dogYear();
//   }
// }
//
// let dogAge = prompt("How old is your dog?", "10");
// alert(dogYear(dogAge));

// Alert the answer.

//Takehome Day-5
// Take a number and return the square of that number (power of 2).
// function square(){
//   notANumber()
//   let result = x * x;
//   return result;
// }
// If a non-number argument is passed into the function, alert NaN and prompt for another response

function square(){
  var x = parseInt(prompt("Choose a number"));
  if(isNaN(x)){
  alert(`${x} is not a number, \nPlease input an integer! `);
  square();
}
else {
  let result = x * x
  alert(x + " is your number!")
  return result;
};
}
// In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
function cap(z){
  let result = z.charAt(0).toUpperCase() + z.slice(1)
  if(z[z.length - 1] === "."){
    return result
  }
  result += "."
  return result
}
// Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.
function flip(str){
  //set length of string
  // let strArr = str.split("");

  //determine if string has even number of letters
  if((str.length % 2) == 0 ){
    //divide string in half
    let first = (str.length / 2);
    //splice off the first half
    var removed = str.substring(0, first);
    //push onto end of array
    str = str.split("");
    str.push(removed);
    let i = 0
    while(i < first){
      str.shift();
      i++
    }
    let result = str.join("")

    return result

}
};
// BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.
function pal(input){
  let rev = input.split("").reverse().join("");
  console.log(rev);
  if(rev == input){
    alert(`${input} is a palindrome!`)
  } else {
    alert("Not a palindrome!")
  }
}
