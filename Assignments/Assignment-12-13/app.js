//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.


//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var int1 = prompt("Enter First Number")
var int2 = prompt("Enter Second Number")
if (int1 > int2) {
    alert(int1 + " " + "is greater than" + " " + int2)

} else if (int2 > int1) {
    alert(int2 + " " + "is greater than" + " " + int1)

} else if (int1 == int2) {
    alert(int1 + " " + "is equal to" + " " + int2)

}

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var num = prompt("Enter Number")
if (num > 0) {
    alert("Number is positive")
} else if (num < 0) {
    alert("Number is negative")
} else {
    alert("Number is Zero")

}

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var character = prompt("Enter Alphabet")
if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
    alert("True")
} else {
    alert("False")
}

//5. Store correct password in a JS variable.
var pass = "JSAssign2"
var reqPass = prompt("Enter Password")
if (reqPass == "") {
    alert("Please enter your password")
} else if (reqPass == pass) {
    alert("Correct! The password you entered matches the original password")
} else {
    alert("Incorrect password")
}

//6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = prompt("Enter hour");
if (hour < 18) {
    greeting = "Good day";
    alert(greeting)
} else {
    greeting = "Good evening";
    alert(greeting)
}