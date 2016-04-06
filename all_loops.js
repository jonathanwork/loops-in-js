//Author Jonathan R. Lopez
/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

// switch(expression) {
//   case value1: 
//     //code to execute
//     break;
//   case value2: 
//     //code to execute; 
//   break;
//   default: 
//     //cod to if none are true.
// }
/*
undefined
*/

//a while loop to iterate through
//while loop
var i = 1; 
while(i < 5) {
  document.write("Iteration " + i + "\n");
  i++;
}

//do while loop
var days = ["monday", 'tuesday', 'wednesday', 'thursday', 'friday']; 
var i = 0;
do {
 var day = days[i++];
 console.log("It's " + day + "\n");
} while(day != 'wednesday');

//for loop
for (var x = 1; x <= 3; x++) {
  for(var y = 1; y <= 3; y++) {
    console.log(x + " X " + y + " = " + (x*y));
  }
}

//for in loop
var days = ["monday", 'tuesday', 'wednesday', 'thursday', 'friday']; 
for (var idx in days) {
  console.log("It's " + days[idx] + "<br>");
}

days = 'mn > dc > tn > mg';
for (idx in days) {
  console.log(days[idx].split('>'));
}

//interate through arrays
var week = ["monday", 'tuesday', 'wednesday', 'thursday', 'friday']; 
for (var i = 1; i <week.length; i++) {
  console.log("<li>" + week[i] + "</li>");
}
for (dayIndex in week) {
  console.log("<li>" + week[dayIndex] + "</li>"); 
}