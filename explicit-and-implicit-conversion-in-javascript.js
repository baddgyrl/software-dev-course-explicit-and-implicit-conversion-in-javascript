/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);
This string is correct. The answer is 3 because JavaScript converts the 5 to number
let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}
isvalid = true because there are no empty strings, let isValid = ("false" === "true")
let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
Output Total Age: 255 because 25 is a string not a number, let age = "25";
                                                           let totalAge = parseInt (age) + 5
                                                           Console.log("Total Age: " + totalAge);
Example of Implicit type coversion
let value = "10" * 2;
console.log("Implicit result:", value)

Example of Explicit type conversion
let input = "30";
let converted = Number(input) + 5;
console.log("Explicit result:", converted);
