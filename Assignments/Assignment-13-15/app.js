//1. Declare an empty array using JS literal notation to store student names in future.
let myArr = [];

//2. Declare an empty array using JS object notation to store student names in future.
var myArr1 = new Array();

//3. Declare and initialize a strings array.
var strArr = ["Asma", "Nimra", "Sania"]

//4. Declare and initialize a numbers array.
var numArr = [1, 10, 20]

//6. Declare and initialize a mixed array.
var mixArr = [10, 'Hello', '@', 20, 80]

//7. Declare and Initialize an array and store available
document.write("<h1>Qualification</h1>")
var myArr2 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
for (var i = 0; i <= myArr2.length - 1; i++) {
    document.write(myArr2[i] + "<br>")
}

//8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
var stdArr = ['Michael', 'John', 'Tony']
var numArr = [320, 220, 480]
var totalMarks = 500;
for (var i = 0; i <= stdArr.length - 1; i++) {
    for (var i = 0; i <= numArr.length - 1; i++) {
        var percentage = (numArr[i] / 500) * 100;
        document.write("<br><br>Score of" + " " + stdArr[i] + " " + "is" + " " + numArr[i] + ".Percentage is:" + percentage + "%")
    }
}

//9.Initialize an array with color names. Display the array elements in your browser.

// var color = ['red', 'blue', 'orange']
// for (var i = 0; i <= color.length - 1; i++) {
//     document.write("</br>" + color[i]);
// }


// var addcolor = prompt('enter color you wanna add in array : ');
// color.unshift(addcolor);
// document.write('</br>' + addcolor);


// var addend = prompt('enter color you wanna add at the end : ');
// color.push(addend);
// document.write('</br>' + addend);

// var color2 = prompt('enter color you wanna add in array : ');
// color.unshift(color2);
// document.write('</br>' + color2);

// color.shift();
// document.write(color2 + '</br>');

// color.pop();
// document.write(color2 + '</br>');

// var position = prompt('at which index you wanna add : ');
// var color3 = prompt('enter color name: ');
// color[position] = color3;
// document.write(color3 + '</br>');

// var pos2 = prompt('at which index you wanna remove : ');
// var colr = prompt('enter nuber of color you wanna delete : ');
// color.splice(pos2, colr);
// document.write(color + '</br>');

// document.write('</br>');

//10. Write a program to store student scores in an array & sort the array in ascending order

var arrScore = [320, 230, 480, 120]
document.write("</br></br>Array :" + arrScore);
var sortedArr = arrScore.sort();
document.write("</br>Sorted Array:" + sortedArr)



//11. Write a program to initialize an array with city names.
var city = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
document.write("</br></br>Cities:" + city)
var selectedCities = city.splice(2, 3);
document.write("</br>Selected cities :" + selectedCities);


//12. Write a program to create a single string from the
var arr = ['This', 'is', 'my', 'cat'];
var String = arr.join('');
document.write("</br></br>Array:</br>" + arr);
document.write("</br>String:</br>" + String);


//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored.
var devices = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("</br></br>Devices:</br>" + devices);
var first = devices.slice(0, 1);
var second = devices.slice(1, 2);
var third = devices.slice(2, 3);
var forth = devices.slice(3, 4);
document.write("</br></br>Out</br>" + first)
document.write("</br>Out</br>" + second)
document.write("</br>Out</br>" + third)
document.write("</br>Out</br>" + forth)


//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order.
var devices = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("</br></br>Devices:</br>" + devices);
var forth = devices.slice(3, 4);
var third = devices.slice(2, 3);
var second = devices.slice(1, 2);
var first = devices.slice(0, 1);

document.write("</br></br>Out</br>" + forth)
document.write("</br>Out</br>" + third)
document.write("</br>Out</br>" + second)
document.write("</br>Out</br>" + first)



//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method
var phone = ['Nokia', 'Samsung', 'Apple', 'Motorolla', 'LG', 'Infinix', 'Techno', 'Oppo', 'Haier'];
document.write("</br></br>SELECT A COMPANY FROM DROP DOWN MENU");
for (i = 0; i < phone.length; i++) {
    document.write("</br></br>" + (i + 1) + '. ' + phone[i]);

}