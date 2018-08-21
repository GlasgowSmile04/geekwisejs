// // Asks for the user's first name
let firstName = prompt("What is your first name?");
// // // Logs the user's first name to the console
console.log(firstName);
// // // Asks for the user's last name
let lastName = prompt("What is your last name?");
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

let test = prompt(`What is your birthday?`)
let bd = new Date(test);
let i = 0

  while (i !== 1){
    if (confirm("Your birthday was entered as: \n" + bd + "\nIs this correct?")){
      alert("Your birthday is: \n" + bd);
      i++;}
     else {
      test = prompt(`What is your birthday?`)
      bd = new Date(test);
    }
  }
