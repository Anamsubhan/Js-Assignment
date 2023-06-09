// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt("Enter city name")
if (city == 'karachi' || city == 'Karachi') {
    alert("Welcome to the city of lights")
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender")
if (gender == 'Male' || gender == 'male') {
    alert("Good Morning Sir")
} else if (gender == 'female' || gender == 'Female') {
    alert("Good Morning Madam")

}
//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
for (var i = 1; i <= 3; i++) {
    var clr = prompt("Enter color")
}
document.write('<table border="1"cellspacing="0">');
document.write("<tr><td>Signal Color<td><td>Message<td><tr>")
if (clr == 'red' || clr == 'Red') {
    document.write("<tr><td>Red<td><td>Must Stop<td><tr>")

}

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var fuel = prompt("Enter remaining Fuel")
if (fuel <= 0.25 + "litres") {
    alert("Please refill the fuel in your car")
}

//5. Run this script, & check whether alert message would be displayed or not.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//c//
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
//d//
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

//e//
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

//f//
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//6. Write a program to take input the marks obtained in three subjects & total marks.

var total = 300
var marks1 = +prompt("Enter first marks")
var marks2 = +prompt("Enter second marks")
var marks3 = +prompt("Enter third marks")
var obtained = marks1 + marks2 + marks3
var percentage = (obtained / total) * 100
document.write("Total Marks:" + "  " + total)
document.write("<br>Obtained Marks:" + "  " + obtained)
document.write("<br>Percentage:" + "  " + percentage)
if (percentage >= 80) {
    document.write("<br>Grade:" + "  " + "A")
    document.write("<br>Remarks: Excellent")
} else if (percentage >= 70) {
    document.write("<br>Grade:" + "  " + "B")
    document.write("<br>Remarks: Good")
} else if (percentage >= 60) {
    document.write("<br>Grade:" + "  " + "C")
    document.write("<br>Remarks: You Need To Improve")
} else {
    document.write("<br>Grade:" + "  " + "Fail")
    document.write("<br>Remarks: Sorry")
}

//7. Guess game:
var secNum = 6
var num = prompt("Guess Number")
if (num == secNum) {
    alert("Bingo! Correct answer")
} else if (num == 5 || num == 7) {
    alert("Close enough to the correct answer")

} else {
    alert("Sorry!Better Luck Next Time")

}

//8. Write a program to check whether the given number is divisible by 3.
var num = +prompt("Enter number")
if (num % 3 == 0) {
    alert("The num is divisible by 3")
} else {
    alert("Not divisible by 3")
}


//9. Write a program that checks whether the given input is an even number or an odd number.
var num = prompt("Enter Number")
if (num % 2 == 0) {
    alert("The Given Number is Even")
} else {
    alert("The Given Number is Odd")
}


// 10. Write a program that takes temperature as input and shows a message
var temp = prompt("Enter Temperature")
if (temp > 40) {
    alert("It Is too hot Outside")
} else if (temp > 30) {
    alert("The Weather Today Is Normal")

} else if (temp > 20) {
    alert("Today’s Weather is cool")

} else {
    alert("OMG! Today’s weather is so Cool.")

}


//11. Write a program to create a calculator