// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = 30
var num2 = 20
var result1 = num1 + num2
var result2 = num1 - num2
var result3 = num1 * num2
var result4 = num1 / num2
var result5 = num1 % num2



document.write("Sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result1)
document.write("<br/>Subtraction of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result2)
document.write("<br/>Multiplication of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result3)
document.write("<br/>Division of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result4)
document.write("<br/>Module of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result5)



document.write("<br/><br/><br/>3:Do the following using JS Mathematic Expressions")
var num1
document.write("<br/>Value after variable declaration is: ??")
num1 = 2
document.write("<br/>Initial Value is:" + num1)
var num2 = ++num1
document.write("<br/>Value after increment is:" + num2)
var num3 = num2 + 7
document.write("<br/>Value after addition is:" + num3)
var num4 = --num3
document.write("<br/>Value after decrement is:" + num4)
var result = num4 % 3
document.write("<br/>The remainder is:" + result)


document.write("<br/><br/><br/>4:Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets")
var ticketPrice = 600
var result = ticketPrice * 5
document.write("<br/>Total cost to buy 5 tickets is " + result + "PKR")

//table//
document.write("<br/><br/><br/>5. Write a script to display multiplication table of any number in your browser.<br/><br/>")
var num = 6
document.write("Table of 6<br/>")
for (var i = 1; i <= 10; i++) {
    var result = num * i
    document.write("<br/>" + num + "*" + i + "=" + result)
}

//tempearture converter//
document.write("<br/><br/><br/>6.The Temperature Converter:")
var C = 25
var Farhnheit = (C * 9 / 5) + 32
document.write("<br/>" + C + "°C" + " " + "is" + " " + Farhnheit + "°F")
var F = 70
var celcius = (F - 32) * 5 / 9
document.write("<br/>" + F + "°F" + " " + "is" + " " + celcius + "°C")

// total cost//
document.write("<br/><br/><br/> 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website..<br/><br/>")
document.write("Shopping Cart<br/><br/>")
var item1 = 650
var item2 = 100
var quant1 = 3
var quant2 = 7
var charge = 100
var total1 = item1 * quant1
var total2 = item2 * quant2
var total = total1 + total2 + charge
document.write("<br/>Price of item 1 is" + " " + item1)
document.write("<br/>Quantity of item 1 is" + " " + quant1)
document.write("<br/>Price of item 2 is" + " " + item2)
document.write("<br/>Quantity of item 1 is" + " " + quant2)
document.write("<br/>Shipping charges is" + " " + charge)
document.write("<br/>Total cost of your order is" + " " + total)


//percentage of student//
document.write("<br/><br/><br/> 8. Store total marks & marks obtained by a student in 2 variables..<br/><br/>")
document.write("MARKS SHEET<br><br>")
var total = 980
var obtained = 804
var percent = (obtained / total) * 100
document.write("<br>Total marks:" + " " + total)
document.write("<br>Marks Obtained :" + " " + obtained)
document.write("<br>Percentage :" + " " + percent + "%")


document.write("<br/><br/><br/>9. Write a script to convert the total currency to Pakistani Rupees..<br/><br/>")
document.write("CURRENCY IN PKR<br><br>")
var doll = 10
var riyal = 25
var pak = (10 * 104.80) + (25 * 28)
document.write("<br>Total currency in PKR:" + " " + pak)



document.write("<br/><br/><br/>10. Write a program to initialize a variable with some number and do arithmetic<br/><br/>")
var num = 4
var result = ((num + 5) * 10) / 2
document.write("<br>The result is :" + " " + result)

//The Age Calculator//
document.write("<br><br><br>11. The Age Calculator")

//The Geometrizer://
document.write("<br><br><br>12. The Geometrizer:<br><br>")
var radius = 20
var circumference = 2 * 3.142 * radius
var area = 3.142 * radius ** 2
document.write("<br>Radius of Circle:" + " " + radius)
document.write("<br>Circumference of Circle:" + " " + circumference)
document.write("<br>Area of Circle:" + " " + area)

//13. The Lifetime Supply Calculator://
document.write("<br><br><br>13. The Lifetime Supply Calculator:")