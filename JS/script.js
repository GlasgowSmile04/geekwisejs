// // Asks for the user's first name
var firstName = prompt("What is your first name?");
// // // Logs the user's first name to the console
console.log(firstName);
// // // Asks for the user's last name
var lastName = prompt("What is your last name?");
// // // Alerts the user's last name
alert(lastName);
// *Asks for the user's birthday, confirms whether the birthday recieved is correct, and alerts the resulting birthday
// var birthYear = prompt("What year were you born in?");
// var birthMonth = prompt("What month were you born in?");
// var birthDay = prompt("What day were you born on?");
//
// var dateOfBirth = (birthMonth + " " + birthDay + " " + birthYear);
// alert("Your birthday is: " + dateOfBirth);

//Self-parsing function built into JS? Awesome.

var test = prompt(`What is your birtday?`)
var bd = new Date(test);
let i = 0

  while (i !== 1){
    if (confirm(bd)){
      alert("Your birthday is: " + bd);
      i++;}
     else {
      var test = prompt(`What is your birtday?`)
      var bd = new Date(test);
    }
  }
