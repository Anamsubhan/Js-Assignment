document.write("Result")
var num = 10
document.write("<br/>Value of a is:" + num)
document.write("<hr/>")

num = ++num;
document.write("<br/>Value of ++a is:" + num)
document.write("<br/>Now the value of a is:" + num)
document.write("<br/><br/>")

num = num++
    document.write("<br/>Value of a++ is:" + num)
document.write("<br/>Now the value of a is:" + num++)
document.write("<br/><br/>")

num = --num;
document.write("<br/>Value of --a is:" + num)
document.write("<br/>Now the value of a is:" + num)
document.write("<br/><br/>")


num = num--
    document.write("<br/>Value of a-- is:" + num--)
document.write("<br/>Now the value of a is:" + num--)



//2. What will be the output in variables a, b & result after execution of the following script://
document.write("<br/><br/><br/>2. What will be the output in variables a, b & result after execution of the following script:<br/>")
var a = 2,
    b = 1;
a = --a
document.write("value of a is decrement =1")
document.write("<br>")

b = --b
document.write("value of b is first decrement = 0")
document.write("<br>")
b = ++b
document.write("value of b is the increment by 1 = 1")
document.write("<br>")
b = b--;
document.write("value of b is first execute then increment =1")

document.write("<br>The value of a:" + a)
document.write("<br>The value of b:" + b)
var result = --a - --b + ++b + b--;

document.write("<br>So The result of --a - --b + ++b + b-- is:" + result)

// 3. Write a program that takes input a name from user & greet the user.
document.write("<br><br><br>3. Write a program that takes input a name from user & greet the user.")
var name = prompt("Your Name Please!")
alert("Hello! Welcome To JavaScript World" + " " + name)


//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
document.write("<br><br><br>5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.")
document.write("<br>")

var num = prompt("Enter Number")
for (var i = 1; i <= 10; i++) {
    result = num * i;
    document.write(num + " " + "*" + i + " " + "=" + " " + result + "<br>")
}



//Percentage of student
var sub1 = prompt("Enter your First Subject")
var marks1 = prompt("Enter marks")
var sub1 = prompt("Enter your Second Subject name")
var marks2 = prompt("Enter marks")
var sub1 = prompt("Enter your Third Subject name")
var marks3 = prompt("Enter marks")
var total = marks1 + marks2 + marks3;

document.write('<table border="1"cellspacing="0">');
document.write("<tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr>");

for (i = 1; i <= 3; i++) {
    document.write("<tr><td></td></tr>");

}