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

// function square(){
//   var x = parseInt(prompt("Choose a number"));
//   if(isNaN(x)){
//   alert(`${x} is not a number, \nPlease input an integer! `);
//   square();
// }
// else {
//   let result = x * x
//   alert(x + " is your number!")
//   return result;
// };
// }
// // In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
// function cap(z){
//   let result = z.charAt(0).toUpperCase() + z.slice(1)
//   if(z[z.length - 1] === "."){
//     return result
//   }
//   result += "."
//   return result
// }
// // Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.
// function flip(str){
//   //set length of string
//   // let strArr = str.split("");
//
//   //determine if string has even number of letters
//   if((str.length % 2) == 0 ){
//     //divide string in half
//     let first = (str.length / 2);
//     //splice off the first half
//     var removed = str.substring(0, first);
//     //push onto end of array
//     str = str.split("");
//     str.push(removed);
//     let i = 0
//     while(i < first){
//       str.shift();
//       i++
//     }
//     let result = str.join("")
//
//     return result
//
// } else {
//   //divide string in half
//   let first = Math.floor(str.length / 2);
//   //splice off the first half
//   var removed = str.substring(0, first);
//   //push onto end of array
//   str = str.split("");
//   str.push(removed);
//   let i = 0
//   while(i < first){
//     str.shift();
//     i++
//   }
//   let result = str.join("")
//
//   return result
//
// }
// }
//
//
// // BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.
// function pal(input){
//   let rev = input.split("").reverse().join("");
//   console.log(rev);
//   if(rev == input){
//     alert(`${input} is a palindrome!`)
//   } else {
//     alert("Not a palindrome!")
//   }
// }

//Day 6
//How to query the Document
// let  pTags = document.getElementsByTagName("p")
// let classTags = document.getElementsByClassName("class")
// let idTags = document.getElementById("ID")
// let h1Tags = document.querySelectorAll(".h1-class")
//
// Create a function that queries the DOM for the body tag using all of these methods. Log the results to your console.
// function query(method, ele){
//   let result;
//   switch (method) {
//     case getElementsByTagName:
//       result = document.getElementsByTagName(ele);
//       console.log(result);
//       break;
//     default:
//
//   }
//   return q;
// }
// The function should take 2 arguments: the DOM selector method the user wants to employ and the name of the DOM selector to be searched for.

//Event Listeners!

// let redDiv = document.querySelector(".red-background")
//
// redDiv.addEventListener("click", () => {
//   redDiv.style.background = "black"
// })
//
// let input = document.querySelector("#input")
//
// input.addEventListener("keypress", (e) => {
//   console.log(e.keyCode);
// })

//Day 6 Takehome
// Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius
// var temp;
// var scale;
// var result;
// let tempDisplay = document.querySelector(".temp");
//
// getTemp();
// getScale();
// setResult();
//
// var newResult = convert(temp, scale);
//
// function getTemp(){
//   let t = parseInt(prompt(`What is the temperature you would like to convert?`));
//     if(isNaN(t)){
//       alert(`That input is not a number. Please enter a degree in NUMBERS!`)
//       getTemp();
//     } else {
//       temp = t;
//       return t;
//     };
// };
//
// function getScale(){
//  let s = prompt(`Which scale would you like to convert FROM? \nPlease input C or F. \n (Result will be the opposite scale)`);
//  s = s.toUpperCase();
//    if(s === "C" || s === "F"){
//      scale = s;
//      return s;
//    }else {
//      alert("Invalid entry")
//      getScale();
//    }
// };
// // Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.
//
// function convert(temp, scale){
//   let newTemp;
//   let newScale;
//   let newResult;
//   if(scale === "C"){
//     newTemp = parseInt(Math.floor((temp * 1.8) + 32));
//     newScale = "F";
//     newResult = `${newTemp}${newScale}`
//   } else {
//     newTemp = parseInt(Math.floor((temp - 32) / 1.8));
//     newScale = "C";
//     newResult = `${newTemp}${newScale}`
//   };
//   return newResult;
// };
//
//
// // Display the temperature in an h3 with minimal styling.
// function setResult(){
//   result = `${temp}${scale}`;
// }
//
// tempDisplay.textContent = result
//
// // From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit.
// function changeDisplay(){
//   if(tempDisplay.textContent == result){
//     tempDisplay.textContent = newResult;
//   } else {
//     tempDisplay.textContent = result;
//   };
// };
//
// document.querySelector("#changer").addEventListener("click", changeDisplay);
//
// // Display the converted temperature in the h3 each time it is changed.
//
// function reset(){
//   temp = "";
//   scale = "";
//   result = "";
//   newResult = "";
//   let tempDisplay = document.querySelector(".temp");
//
//   getTemp();
//   getScale();
//   setResult();
//
//   newResult = convert(temp, scale);
//
//   tempDisplay.textContent = result
// };
//
// document.querySelector("#reset").addEventListener("click", reset);

// function init(){
//   var temp;
//   var scale;
//   var result;
//   var newResult = "";
//   let tempDisplay = document.querySelector(".temp");
//
//   getTemp();
//   getScale();
//   setResult();
//
//   var newResult = convert(temp, scale);
//
//   tempDisplay.textContent = result
// };

//Day 7
//GRAB INNER TEXT
// let text = document.getElementById("para").textContent;
// document.getElementById("para").textContent = "This is some other text"

//GRAB INNER HTML
// let text = document.getElementById("para").innerHTML;
// console.log(text);
//
// let content = document.getElementById("content");
// //CREATE A PARAGRAPH TAG
// let myPTag = document.createElement("p");
// //DEFINE THE CONTENT WITHIN THE NEW ELEMENT
// myPTag.textContent = "This is a test."
// //PUSH THE NEW ELEMENT INTO THE DOM
// content.appendChild(myPTag);
//
//
// //CREATING A BUTTON AND ADDING A CLASS.
// let myBtn = document.createElement("button");
// myBtn.className = "btn btn-primary";
// myBtn.id = "someId";
// myBtn.textContent = "click me";
//
// myBtn.classList.remove("btn-primary");
// myBtn.classList.add("btn-primary");
//
// content.appendChild(myBtn);
//
// //USING SET ATTRIBUTE
// let myImg = document.createElement("img");
// myImg.setAttribute("alt", "Add attribute from JS");
// myImg.setAttribute("src", "https://pbs.twimg.com/profile_images/584025370036314112/0maBx-gf_400x400.jpg");
// content.appendChild(myImg);
//
// console.log(myImg.getAttribute("src"))
// const script = document.querySelector("script");
// const body = document.querySelector("body");
//
// let newP = document.createElement("p");
// let newH1 = document.createElement("h1");
// let newFooter = document.createElement("footer");
// let newHeader = document.createElement("header");
// let newUl = document.createElement("ul");
// let newDiv = document.createElement("div");
//
// function createLi(classArray, linkText){
//   let newLink = document.createElement("li");
//   let newA = document.createElement("a");
//   newA.setAttribute("href", "#");
//   newA.textContent = linkText;
//   newLink.appendChild(newA);
//   for (let i = 0; i < classArray.length; i++) {
//     newLink.classList.add(classArray[i]);
//   }
//   newUl.appendChild(newLink);
// }
//
// createLi(["pull-left"], "Home");
// createLi(["pull-right"], "Contact");
// createLi(["pull-right"], "About");
//
// newUl.classList.add("nav", "nav-pills");
// newHeader.appendChild(newUl);
// body.insertBefore(newHeader, script);
//
//
// function createTextElement(elementType, text) {
//   let newElement = document.createElement(elementType);
//   newElement.textContent = text;
//   return newElement;
// }
//
// newDiv.classList.add("text-center");
//
// let h1 = createTextElement("h1", "Hello World!");
// let p = createTextElement("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
// newDiv.appendChild(h1);
// newDiv.appendChild(p);
// body.insertBefore(newDiv, script);
//
// let newFooterLink = document.createElement("a");
//
// newFooterLink.textContent = "Check me out.";
// newFooterLink.setAttribute("href", "https://www.google.com");
// newFooterLink.setAttribute("target", "_blank");
// newFooterLink.classList.add("text-center", "footer");
// newFooter.appendChild(newFooterLink);
// body.insertBefore(newFooter, script);


//THIS
// function myFunc() {
//   console.log("myFunc", this);
// }
// myFunc()
//
// console.log(this)
//
// function fizzBuzz(){
//   let list = document.createElement("ol");
//   for (let i = 1; i < 101; i++) {
//     if (i % 15 == 0) {
//       let res = document.createElement("li");
//       res.textContent = "FizzBuzz";
//       list.appendChild(res)
//       console.log("FizzBuzz");
//     } else if (i % 5 == 0) {
//       let res = document.createElement("li");
//       res.textContent = "Buzz";
//       list.appendChild(res)
//       console.log("Buzz");
//     }else if (i % 3 == 0) {
//       let res = document.createElement("li");
//       res.textContent = "Fizz";
//       list.appendChild(res)
//       console.log("Fizz");
//     } else {
//       console.log(i)
//       let res = document.createElement("li")
//       res.textContent = i;
//       list.appendChild(res)
//     }
//   }
//   body.insertBefore(list, script);
// }

//Day 7 Takehome
const script = document.querySelector("script")
const body = document.querySelector("body")
let myBtn = document.querySelector(".btn")
let newH1 = document.createElement("h1")
let newDiv = document.createElement("div")
let newP = document.createElement("p")

function generateH1(){
  // When the user clicks a button, prompt them for the a title.
    let titleText = prompt("Please title your Blog:");
    newH1.textContent = titleText;
    // Put that title into an h1 that is centered on the page.
    newH1.classList.add("text-center");
    newDiv.appendChild(newH1);
    body.insertBefore(newDiv, myBtn)
}
function generateP(){
  // Ask the user to write a few sentences about what they did today.
  let paraText = prompt("Please describe your day:");
  newP.textContent = paraText;
  // Populate a p tag with the sentences, align the p tag text with justify.
  newP.classList.add("text-justify");
  generateBG()
  newDiv.appendChild(newP);
  body.insertBefore(newDiv, myBtn)
}

function generateBG(){
  // Finally, ask the user for his or her favorite color,
  let i = 0;
  while (i < 1) {
  let color = prompt(`What is your favorite color? \n IE: red, orange, yellow, green, blue, pink, purple, black, white, or grey`).toLowerCase();
    switch (color) {
      case "red":
        newP.style.backgroundColor = "red"
        i++
        break;
      case "orange":
        newP.style.backgroundColor = "orange"
        i++
        break;
      case "yellow":
        newP.style.backgroundColor = "yellow"
        i++
        break;
      case "green":
        newP.style.backgroundColor = "green"
        i++
        break;
      case "blue":
        newP.style.backgroundColor = "blue"
        i++
        break;
      case "pink":
        newP.style.backgroundColor = "pink"
        i++
        break;
      case "purple":
        newP.style.backgroundColor = "purple"
        i++
        break;
      case "black":
        newP.style.backgroundColor = "black"
        newP.style.color = "white"
        i++
        break;
      case "white":
        newP.style.backgroundColor = "white"
        i++
        break;
      case "grey":
        newP.style.backgroundColor = "grey"
        i++
        break;
        // Remember, check for edge cases with color.
      default: let color = alert(`That is not a defined color, try again!`);
    }

  }

  //and set the background of the p tag to that color

}


myBtn.addEventListener("click", function(){
  generateH1();
  generateP();
});
